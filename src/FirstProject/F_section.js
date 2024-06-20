import "../Css/project.css"
import Project_1 from "../assets/png/project_1.png"

// import circle from "../assets/png/circle"

function F_section() {
  return (
    <>
    
    <div class="themeClrSelector">
      <input type="color" value="#0078d7" class="themeClrSelector__input" />
      <img
        src="https://img.icons8.com/fluent/48/000000/rgb-circle-1.png"
        class="themeClrSelector__img"
      />
    </div>

    <section class="project-cs-hero dynamicBg">
      <div class="project-cs-hero__content">
        <h1 class="heading-primary">Project 1</h1>
        <div class="project-cs-hero__info">
          <p class="text-primary">
            Cial is a dynamic web application that combines the power of HTML, CSS, and JavaScript
                 to deliver a user-friendly and interactive financial services platform. 
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a href="https://vishesh425.github.io/Cial/" class="btn btn--bg" target="_blank">Live Link</a>
        </div>
      </div>
    </section></>
  );
}

export default F_section;
