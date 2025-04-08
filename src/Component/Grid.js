// src/components/Grid.js
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Datasets/GridData";
import "../Css/Grid.css"; // Import CSS file

const Grid = () => {
  const defaultImageUrl = "https://via.placeholder.com/150?text=No+Image";
  return (
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content_1">
          <div className="portfolio">
            {/* <h1>My Projects</h1> */}
            <span class="heading-sec__main">My Projects</span>
            <div className="grid">
              {projects.map((project) => (
                <div className="grid-item" key={project.id}>
                  <img src={project.image} alt={project.title} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <button className="grid-button">
                    <Link
                      to={project.link}
                      class="btn btn--med_1 btn--theme dynamicBgClr"
                      // target="_blank"
                    >
                      {project.link_label}
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
