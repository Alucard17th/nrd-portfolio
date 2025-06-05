import { useEffect, useState } from "react";
import { getProjects } from "../services/cosmic";
import AOS from "aos";
import "aos/dist/aos.css";
import react from "../assets/icons/react.png";
import laravel from "../assets/icons/laravel.png";
import wp from "../assets/icons/wp.png";
import livewire from "../assets/icons/livewire.png";
import website from "../assets/gifs/website.gif";


const CardProjects = () => {
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
        return react;
      case "Laravel":
        return laravel;
      case "Wordpress":
        return wp;
      case "Livewire":
        return livewire;
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-5 pt-3" data-aos="fade-left">
      <div className="container text-center">
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-lg-6"
              style={{ backgroundColor: project.metadata?.color }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              key={index}
            >
              <div className="p-3 text-white project-container">
                <img
                  alt=""
                  className="img-fluid mb-4 rounded shadow-lg project-image"
                  src={project.metadata?.image?.url}
                  style={{ minHeight: "250px" }}
                />
                <h3 className="display-5 fw-bold">{project.title}</h3>

                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fs-6 px-3 pb-0">
                      {project.metadata?.description}
                    </p>
                  </div>
                </div>
                <div className="border-top border-white-50 pt-2">
                  <div className="mt-2 text-start pt-3">
                    <h5>Technologies:</h5>
                    <div className="d-flex gap-2">
                      {project.metadata?.technologies?.map((tech, index) => (
                        <div
                          key={index}
                          title={tech}
                          style={{ width: "fit-content" }}
                          className="col-3 bg-light p-1 rounded text-center d-flex align-items-center justify-content-center"
                        >
                          <img
                            src={technologieImage(tech)}
                            className="img-fluid"
                            alt={tech}
                            style={{ width: "40px" }}
                          />
                          {/* <span key={index} className="badge bg-primary me-2">
                          {tech}
                        </span> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.metadata?.url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    className="btn btn-outline-dark p-1 shadow-lg"
                  >
                    <h4
                      className="fw-bold fs-5 my-1 text-white m-0"
                      style={{ color: project.metadata?.color }}
                    >
                      <img
                        src={website}
                        className="img-fluid"
                        style={{ width: "30px" }}
                      />
                      Preview
                    </h4>
                  </a>
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

        /* Container styles */
        .project-container {
          cursor: pointer; /* Shows it's clickable */
          transition: all 0.3s ease; /* Smooth container transitions */
        }

        /* Image styles */
        .project-image {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center center;
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Hover container to animate image */
        .project-container:hover .project-image {
          animation: gentlePulse 3s ease-in-out infinite;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Pulse animation */
        @keyframes gentlePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
      `}
      </style>
    </section>
  );
};

export default CardProjects;
