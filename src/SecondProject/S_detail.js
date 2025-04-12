import mockup from "../assets/jpeg/project-mockup-example.jpeg"
import Project_2 from "../assets/png/project_2.png"

function S_detail(){
    return (
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={Project_2}
                alt="Project Image"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Project Overview</h3>
                <p class="project-details__desc-para">
                  This is a responsive and visually appealing restaurant website
                  built using ReactJS, showcasing a modern and elegant user
                  interface designed for a fine dining experience. The project
                  highlights smooth animations, a clean layout, and interactive
                  elements to enhance user engagement.
                </p>
              
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">
                    ReactJS (Functional Components)
                  </div>
                  <div class="skills__skill">
                    CSS3 (Custom styling & media queries)
                  </div>
                  <div class="skills__skill">HTML5</div>
                  {/* <div class="skills__skill">React</div>
                  <div class="skills__skill">SASS</div> */}
                  <div class="skills__skill">Responsive Design Principles</div>
                  <div class="skills__skill">GIT</div>
                  {/* <div class="skills__skill">Shopify</div>
                  <div class="skills__skill">Wordpress</div> */}
                  {/* <div class="skills__skill">Google Map</div> */}
                  {/* <div class="skills__skill">Facebook Ads</div> */}
                  {/* <div class="skills__skill">Android</div>
                  <div class="skills__skill">IOS</div> */}
                </div>
              </div>
              <div class="project-details__links">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href=" https://vishesh425.github.io/Food/"
                  class="btn btn--med btn--theme project-details__links-btn dynamicBgClr"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/vishesh425/Food"
                  class="btn btn--med btn--theme-inv project-details__links-btn dynamicBrdrClr"
                  target="_blank"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default S_detail;