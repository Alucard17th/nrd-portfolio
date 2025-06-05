import { useEffect, useMemo, useState } from "react";
import Typed from "typed.js";
import avatar from "../assets/blobavatar-nb.png";
import blob from "../assets/blob.svg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Linkedin, Github, Twitter, Discord } from "react-bootstrap-icons";

const HeroA = () => {
  const [engineInit, setEngineInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineInit(true));
  }, []);

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

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "#000" },
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
        shape: { type: "square" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section id="hero" className="d-flex" style={{ height: "auto", minHeight: "100vh" }}>
      <div className="container-fluid h-100 p-0">
        <div className="row g-0 h-100">
          {/* Left Column (col-4) - Dark background with particles and avatar */}
          <div
            className="col-md-4 position-relative bg-dark"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          >
            {engineInit && (
              <div className="position-absolute w-100 h-100">
                <Particles
                  options={options}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )}

            {/* Avatar with triangle backgrounds */}
            <div className="position-relative h-100 d-flex align-items-center justify-content-center">
              {/* Avatar image */}
              <div
                className="h-100 w-100 avatar-container"
              >
                <img
                  src={avatar}
                  alt="Profile"
                  className="img-fluid position-absolute avatar-image"
                />
              </div>
            </div>
          </div>

          {/* Right Column (col-8) - Content */}
          <div className="col-md-8 d-flex align-items-center bg-white mt-lg-5">
            <div
              className="p-5"
              style={{ maxWidth: "800px", marginLeft: "auto" }}
            >
              <button className="btn btn-warning mb-4">DOWNLOAD CV</button>
              <h1 className="display-4 fw-bold mb-3">
                I'm a <br />
                <span
                  id="typed-text"
                  className="text-warning fw-semibold hero-text"
                ></span>
              </h1>
              <p className="lead mb-4">
                I design and build beautiful web experiences that are fast,
                <br></br>
                functional, and human-centered.
              </p>
              <div className="d-flex gap-3 mb-5">
                <button className="btn btn-warning px-4 py-2">
                  GET STARTED
                </button>
                <button className="btn btn-outline-warning px-4 py-2">
                  VIEW PORTFOLIO
                </button>
              </div>
              <div className="social-links">
                <p className="text-muted mb-2">FOLLOW ME ON:</p>
                {/* Add social icons here */}
                <div className="d-flex gap-4">
                  <a href="#" className="text-dark">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-dark">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-dark">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-dark">
                    <Discord size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          #tsparticles{
            height: 100vh;
          }
  .avatar-container {
  right: -18vw;
  position: absolute;
  top: 16vh;
  z-index: 10;
}

@media (max-width: 1200px) { 
  .avatar-container {
    right: 0;
  }
}

@media (max-width: 768px) { 
  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .avatar-image {
    width: 50%;
    // height: auto;
    top:-20px;
  }

  .col-md-8{
          z-index: 11;
          margin-top: 60vh;
  }
}
  @media (min-width: 576px) and (max-width: 767.98px) {
      .avatar-image {
       width: 45%;
        top: -12vh;
      }
  }
        `}
      </style>
    </section>
  );
};

export default HeroA;
