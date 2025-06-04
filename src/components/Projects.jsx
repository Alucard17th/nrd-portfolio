import { useState } from "react";
import CardProjects from "./CardProjects";
import ThreeDProjects from "./ThreeDProjects";

const Projects = () => {
  return (
    <div className="container">
      <div className="toggle-container">
        <div className="d-flex align-items-center">
          <img
            src={"/gifs/new-projects.gif"}
            alt="GIF"
            className="img-fluid me-1"
            style={{ maxWidth: "10%" }}
          />
          <h2 className="fw-bold text-center" style={{ letterSpacing: "12px" }}>
            Projects
          </h2>
          <button
            type="button"
            className="btn btn-outline-warning"
            style={{ marginLeft: "auto" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Preview in 3D
          </button>
        </div>
      </div>

      <CardProjects />
     
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content bg-transparent border-0">
            <button
                type="button"
                className="btn-close btn-close-white"
                style={{ position: "absolute", top: "10px", right: "10px", zIndex: "9999", fontSize: "1.3rem", fontWeight: "bold" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            <div className="modal-body"><ThreeDProjects /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
