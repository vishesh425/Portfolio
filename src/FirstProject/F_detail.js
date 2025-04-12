import mockup from "../assets/jpeg/project-mockup-example.jpeg"
import Project_1 from "../assets/png/project_1.png"

function F_detail(){
    return(
        <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={Project_1}
                alt="Project Image"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Project Overview</h3>
                <p class="project-details__desc-para">
                Cial is a dynamic web application that combines the power of HTML, CSS, and JavaScript
                 to deliver a user-friendly and interactive financial services platform. 
                 This project serves as a showcase of modern web development techniques and
                  includes robust version control using Git for seamless collaboration and code management.
                </p>
                {/* <p class="project-details__desc-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  alias tenetur minus quaerat aliquid, aut provident blanditiis,
                  deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                  mollitia laborum corrupti ullam rem?
                </p> */}
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">JavaScript</div>
                  {/* <div class="skills__skill">React</div>
                  <div class="skills__skill">SASS</div> */}
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
                  href="https://vishesh425.github.io/Cial/"
                  class="btn btn--med btn--theme project-details__links-btn dynamicBgClr"
                  target="_blank"
                  >Live Link</a
                >
                <a
                  href="https://github.com/vishesh425/Cial"
                  class="btn btn--med btn--theme-inv project-details__links-btn dynamicBrdrClr"
                  target="_blank"
                  >Code Link</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
  
    );
}
export default F_detail;