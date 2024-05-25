function aboutme() {
  return (
    <section id="about"  className="about sec-pad">
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">About Me</span>
        <span className="heading-sec__sub">
        I've embarked on numerous self-learning projects to hone my skills and explore the ever-evolving landscape of web development.
            </span>
      </h2>
      <div className="about__content">
        <div className="about__content-main">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <p className="about__content-details-para">
              Hey! It's
              <strong> Vishesh Parmar </strong>
              and I'm a <strong> Frontend Web Developer </strong> located in
              INDORE.Motivated and enthusiastic <strong> Frontend Developer </strong>
              with a passion for creating captivating user experiences. 
              Proficient in modern web development technologies,
               I have honed my skills through practical projects tailored to my level of expertise. 
               With a keen eye for detail and a commitment to continuous learning, 
               I strive to contribute innovative solutions to enhance digital landscapes.
            </p>
            <p className="about__content-details-para">
              {/* I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals.  */}
              Feel free to
              <strong> contact </strong> me here.
            </p>
          </div>
          <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
            >Contact</a
          >
        </div>
        <div className="about__content-skills">
          <h3 className="about__content-title">My Skills</h3>
          <div className="skills">
            <div className="skills__skill">Java</div>
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">ReactJS</div>
            <div className="skills__skill">SQL Server</div>
            {/* <div className="skills__skill">SASS</div> */}
            {/* <div className="skills__skill">GIT</div>
            <div className="skills__skill">Shopify</div>
            <div className="skills__skill">Wordpress</div>
            <div className="skills__skill">Google ADS</div>
            <div className="skills__skill">Facebook Ads</div>
            <div className="skills__skill">Android</div>
            <div className="skills__skill">IOS</div> */}
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default aboutme;
