import { useEffect, useState } from "react";
import { getProjects } from "../services/cosmic";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error("Failed to load projects:", err);
      }
    };

    fetch();
  }, []);

  const hexToRgba = (hex, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)}, ${alpha})`
      : `rgba(0,0,0,${alpha})`; // fallback
  };

  const technologieImage = (tech) => {
    switch (tech) {
      case "React":
        return "/icons/react.png";
      case "Laravel":
        return "/icons/laravel.png";
      case "Wordpress":
        return "/icons/wp.png";
      case "Livewire":
        return "/icons/laravel.png";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-5" data-aos="fade-left">
      <div className="container text-center">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              className={
                "row g-0 align-items-center mb-4 rounded project-card"
              }
              style={{
                "--project-color": project.metadata?.color || "#6c95d3", // Fallback color
              }}
            >
              <div
                className={`col-lg-6 p-0 ${
                  index % 2 !== 0 ? "order-lg-1" : ""
                } image-container bg-transparent`} // Added image-container class
              >
                <img
                  alt=""
                  className="img-fluid rounded project-img"
                  src={project.metadata?.image?.url}
                />
              </div>
              <div
                className={`col-lg-6 col-md-12 col-sm-12 p-4 ${
                  index % 2 !== 0 ? "project-card-right" : "project-card-left"
                }`}
              >
                <div className="row">
                  <div
                    className=""
                    style={{
                      zIndex: 1,
                      backgroundColor: project.metadata?.color,
                      height: "20px",
                      width: "20px",
                      top: "0px",
                      right: index % 2 !== 0 ? "unset" : "0", // Right if odd index
                      left: index % 2 !== 0 ? "0" : "unset", // Left if even index
                      position: "absolute",
                    }}
                  ></div>
                  <div className="col-lg-12 col-xxl-10 col-xl-12">
                    <div className="mt-4 mt-md-0">
                      <a
                        href={project.metadata?.url}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <h2
                          className="fw-semibold fs-1 my-1"
                          style={{ color: project.metadata?.color }}
                        >
                          {project.title}
                        </h2>
                      </a>
                      <p className="my-5 text-dark">
                        {project.metadata?.description}
                      </p>
                      <div className="row">
                        {project.metadata?.technologies?.map((tech, index) => (
                          <div className="col-3">
                            <img
                              src={technologieImage(tech)}
                              className="me-2 img-fluid"
                              alt={tech}
                              style={{ width: "30px" }}
                            />
                            <span key={index} className="badge bg-primary me-2">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .project-card {
          overflow: hidden; /* Ensures the image doesn't overflow the card */
          background: rgba( 255, 255, 255, 0.25 );
          box-shadow: 0 2px 10px 0 rgba(109, 125, 210, 0.49);
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          border-radius: 10px;
          border: 1px solid rgba( 255, 255, 255, 0.18 );
        }

        .project-card-text{
          border-top: 1px solid rgb(255, 0, 0);
        }
        .project-card-right::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50%;
          height: 20px;
          background: var(--project-color);
          border-radius:0 0 3px 0px;
        }

        .project-card-right::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 100%;
          background: var(--project-color);
        }

        .project-card-left::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50%;
          height: 20px;
          background: var(--project-color);
          border-radius:0 0 3px 0px;
        }

        .project-card-left::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 100%;
          background: var(--project-color);
        }

        .image-container {
          height: 100%; /* Make container take full height */
          display: flex;
          align-items: center; /* Center vertically */
          justify-content: center; /* Center horizontally */
          background-color: #f8f9fa; /* Optional: background for image area */
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures image covers the area while maintaining aspect ratio */
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        /* Set a fixed height for the project cards */
        @media (min-width: 992px) {
          .project-card {
            min-height: 260px; /* Adjust this value as needed */
          }
        }

        /* Responsive adjustments */
        @media (max-width: 991.98px) {
          .image-container {
            height: 300px; /* Fixed height on smaller screens */
          }
        }

        .background {
          height: 100%;
          width: 100vw;
          background: radial-gradient(at 18% 99%, #6c95d3 0px, transparent 50%) repeat scroll 0% 0%, 
          radial-gradient(at 97% 8%, #6e8fd2 0px, transparent 50%) repeat scroll 0% 0%, 
          radial-gradient(at 79% 82%, #6d7dd2 0px, transparent 50%) repeat scroll 0% 0%,
          radial-gradient(at 96% 10%, rgb(222, 81, 251) 0px, transparent 50%) repeat scroll 0% 0%,    
          radial-gradient(at 42% 20%, rgb(116, 240, 251) 0px, transparent 50%) repeat scroll 0% 0%,
          radial-gradient(at 4% 49%, rgb(203, 88, 218) 0px, transparent 50%) repeat scroll 0% 0%, rgba(0, 0, 0, 0) radial-gradient(at 57% 33%, rgb(218, 83, 228) 0px, #a299ff 50%) repeat scroll 0% 0%;
        }


      `}
      </style>
    </section>
  );
};

export default Projects;
