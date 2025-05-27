import { useEffect, useMemo, useState } from "react";
import Typed from "typed.js";
import avatar from "../assets/me.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [engineInit, setEngineInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineInit(true));
  }, []);

  // Typed.js effect
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "Full Stack Developer.",
        "Laravel Specialist.",
        "Creative Coder.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // Particle options with correct fullScreen key
  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // ✅ CORRECT capital 'S'
      background: {
        image: "url('/bg-s.jpg')", // ✅ Path to your image in public/images/
        position: "center",
        size: "cover",
        repeat: "no-repeat",
        color: "#00000000",
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          opacity: 1,
          color: {
            value: "",
          },
        },
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          value: 60,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section
      id="hero"
      className="position-relative d-flex align-items-center text-white"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0d47a1",
      }}
    >
      {/* Confined particles (not full screen) */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{ zIndex: 0 }}
      >
        <Particles options={options} />
      </div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-warning">Noureddine</span>
            </h1>
            <h2 className="mb-4">
              <span id="typed-text" className="text-light fw-semibold"></span>
            </h2>
            <p className="lead mb-4">
              I design and build beautiful web experiences that are fast,
              functional, and human-centered.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#projects" className="btn btn-outline-warning btn-lg shadow-sm">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>
          </div>

          <div
            className="col-md-6 text-center"
            style={{ position: "relative", zIndex: 999 }}
          >
            {/* Avatar */}
            <img
              src={avatar}
              alt="Hero Avatar"
              className="img-fluid rounded shadow-lg bg-transparent mt-5 w-75"
              style={{
                maxWidth: "100%",
                animation: "float 4s ease-in-out infinite",
              }}
            />

            {/* Technology Icons */}
            <img
              src="/icons/laravel.png"
              className="icons-bg"
              alt="React"
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                width: "65px",
                animation: "pulse 3s infinite",
              }}
            />
            <img
              src="/icons/javascript.png"
              className="icons-bg"
              alt="Laravel"
              style={{
                position: "absolute",
                top: "15%",
                right: "0%",
                width: "65px",
                animation: "pulse 4s infinite",
              }}
            />
            <img
              src="/icons/react.png"
              className="icons-bg"
              alt="JavaScript"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "10%",
                width: "65px",
                animation: "pulse 5s infinite",
              }}
            />
            <img
              src="/icons/wp.png"
              className="icons-bg"
              alt="Git"
              style={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
                width: "65px",
                animation: "pulse 6s infinite",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute bottom-0 w-100">
        <svg
          viewBox="0 0 1440 320"
          style={{ display: "block", width: "100%", height: "120px" }}
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }

        .icons-bg {
          background-color: #fff;
          border-radius: 15%;
          padding: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
