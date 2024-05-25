import "../Css/project.css"
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
            Spotify is a custom software engineering company that creates
            innovative solutions for complex problems solutions for complex
            problems
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
        </div>
      </div>
    </section></>
  );
}

export default F_section;
