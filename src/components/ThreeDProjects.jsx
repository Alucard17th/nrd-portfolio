import * as THREE from 'three'
import { useEffect, useRef, useState, useMemo } from 'react'
import { getProjects } from "../services/cosmic";
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875
const PX_WIDTH  = 1341 
const PX_HEIGHT =  637 
const AR              = PX_WIDTH / PX_HEIGHT           // 2.106…
const WORLD_HEIGHT     = 1.2
const WORLD_WIDTH      = WORLD_HEIGHT * AR
const WORLD_DEPTH      = 0.05

const FRAME_SLOTS = [
  // Left
  { position: [-1.25, 1.5, 0.25], rotation: [0, Math.PI / 2.5 - 1, 0] },
  { position: [-1.5, 0, 2.75], rotation: [0, Math.PI / 2.5, 0] },

  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0] },

  // Right
  { position: [1.25, 1.5, 0.25], rotation: [0, -Math.PI / 2.5 + 1, 0] },
  { position: [1.5, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0] },

]

export default function ThreeDProjects() {
  const [projects, setProjects] = useState([])

  /* Fetch once ------------------------------------------------ */
  useEffect(() => {
    ;(async () => {
      try {
        const data = await getProjects() // your API
        console.log('data', data)
        setProjects(data)
      } catch (err) {
        console.error('Failed to load projects:', err)
      }
    })()
  }, [])

  /* Produce the <Frames images=[…] /> prop -------------------- *
   * – Keeps the old ‘images’ structure (position, rotation, url)
   * – Drops frames that don’t have a project yet
   * – Memoised so the array only rebuilds when projects change  */
  const images = useMemo(() => {
    return FRAME_SLOTS.map((slot, i) =>
      projects[i]                // do we have a project for this slot?
        ? { ...slot, url: projects[i].metadata.image.imgix_url } // yes → inject its URL
        : null
    ).filter(Boolean)            // remove empty slots until data arrives
  }, [projects])

  /* Guard: avoid rendering Frames until we have at least one image */
  if (!images.length) return null

  /* Canvas + environment (unchanged) */
  return (
    <div style={{ height: '650px' }} className='py-5'> 
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 1.2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.89 * (!isActive && hovered ? 0.89 : 1), 0.89 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? '#000' : 'white', 1.75, dt)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        // scale={[1, GOLDENRATIO * 2, 0.05]}
        scale={[WORLD_WIDTH, WORLD_HEIGHT, WORLD_DEPTH]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#6bd4d6" metalness={0.5} roughness={0.5} envMapIntensity={0.002} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.05}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}
