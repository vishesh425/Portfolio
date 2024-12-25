import example_img from '../assets/jpeg/project-mockup-example.jpeg'
import Project_1 from "../assets/png/project_1.png"
import Projects from "../assets/png/Projects.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function projects() {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
          {/* Featuring web development projects that demonstrate skills in creating dynamic, 
          responsive, and user-friendly web applications. */}
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={Projects}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Collection</h3>
              <p class="projects__row-content-desc">
              Featuring web development projects that demonstrate skills in creating dynamic,
               responsive, and user-friendly web applications
              </p>

              <Link
                to="/Project_view"
                class="btn btn--med btn--theme dynamicBgClr"
              // target="_blank"
              >See More
              </Link>
            </div>
          </div>



          {/* <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={example_img}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Lerning</h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <Link
                to="/Project_view"
                class="btn btn--med btn--theme dynamicBgClr"
              // target="_blank"
              >Case Study
              </Link>
            </div>
          </div> */}

{/* 
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={example_img}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Project 3</h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <Link
                to="/Project_info"
                class="btn btn--med btn--theme dynamicBgClr"
              // target="_blank"
              >Case Study
              </Link>
            </div>
          </div> */}


        </div>
      </div>
    </section>
  );
}

export default projects;
