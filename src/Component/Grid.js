// src/components/Grid.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Project_1 from "../assets/png/project_1.png"
import example_img from '../assets/jpeg/project-mockup-example.jpeg'
import { gridData } from "../Datasets/GridData";
import "../Css/Grid.css"; // Import CSS file

const Grid = () => {
    const defaultImageUrl = "https://via.placeholder.com/150?text=No+Image";
    return (
        <div>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content_1">
                        <div className="grid-container">
                            {gridData.map((item) => (
                                <div className="grid-item" key={item.id}>
                                    <div className="image-container">
                                        {/* If no image is provided, use a default placeholder image */}
                                        <img
                                            src={item.imgUrl || defaultImageUrl}
                                            alt={item.title}
                                            className="grid-image"
                                        />
                                    </div>
                                    <h3>{item.title}</h3>
                                    {/* <p className="description">{item.description}</p> */}
                                    <button className="grid-button">
                                        <Link
                                            to={item.link}
                                            class="btn btn--med_1 btn--theme dynamicBgClr"
                                            // target="_blank"
                                        >{item.link_label}
                                        </Link>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Grid;
