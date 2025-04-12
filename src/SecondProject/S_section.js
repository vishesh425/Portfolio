import "../Css/project.css"
import Project_1 from "../assets/png/project_1.png"

// import circle from "../assets/png/circle"

function s_section() {
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
          <h1 class="heading-primary">Project 2</h1>
          <div class="project-cs-hero__info">
            <p class="text-primary">
              This project demonstrates my front-end skills in crafting modern,
              responsive UIs and working with animations, layout techniques, and
              form handling.
            </p>
          </div>
          <div class="project-cs-hero__cta">
            <a
              href="https://vishesh425.github.io/Food/"
              class="btn btn--bg"
              target="_blank"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default s_section;
