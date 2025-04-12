function aboutme() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            {/* I've embarked on numerous self-learning projects to hone my skills
            and explore the ever-evolving landscape of web development. */}
            I am a self-motivated web developer with knowledge of ReactJS,
            NodeJS, API development, and MySQL.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            {/* <div className="about__content-details">
              <p className="about__content-details-para">
                Hi! I'm
                <strong> Vishesh Parmar </strong>,a passionate and
                self-motivated
                <strong> ReactJS & NodeJS Developer </strong> with a solid
                understanding of full-stack web development. I have hands-on
                experience in building dynamic user interfaces, developing
                scalable backend systems, and integrating RESTful APIs.
              </p>
              <p className="about__content-details-para">
                I specialize in creating responsive web applications using
                <strong> ReactJS </strong>, writing backend logic with
                <strong> Node.js </strong>, and managing databases using
                <strong> MySQL </strong> and
                <strong> PhpMyAdmin </strong>. I’ve worked extensively with
                <strong> RESTful APIs </strong> , including designing, building,
                and integrating them to ensure smooth communication between
                frontend and backend.
              </p>
              <p className="about__content-details-para">
                I’m familiar with the MVC architecture, version control using
                <strong> Git & GitHub </strong>, and tools like
                <strong> Postman </strong> for testing APIs. I also have a
                growing interest in ethical hacking, web security, and AI/ML
                technologies
              </p>
              <p className="about__content-details-para">
                I enjoy building clean, user-friendly web applications and am
                always looking to expand my knowledge and take on new
                challenges.
              </p>
              <p className="about__content-details-para">
                {/* I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals.  *
                Feel free to
                <strong> contact </strong> me here.
              </p>
            </div> */}
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hi! I'm <strong>Vishesh Parmar</strong>, a passionate and
                self-motivated
                <strong> ReactJS & NodeJS Developer</strong> with experience in
                building responsive UIs, scalable backends, and integrating
                <strong> RESTful APIs</strong>.
              </p>
              <p className="about__content-details-para">
                Skilled in <strong>ReactJS</strong>, <strong>Node.js</strong>,
                <strong> MySQL</strong>, and <strong>PhpMyAdmin</strong>. I also
                work with tools like
                <strong> Git</strong>, <strong>GitHub</strong>, and{" "}
                <strong>Postman</strong>, and follow the
                <strong> MVC architecture</strong>.
              </p>
              <p className="about__content-details-para">
                I enjoy creating clean, user-friendly web apps and continuously
                expanding my skills. Feel free to <strong>contact</strong> me!
              </p>
            </div>

            <a
              href="./#contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Contact
            </a>
          </div>

          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            {/* <ul className="skills">
              <li className="skills__skill">
                Frontend: ReactJS, HTML, CSS, JavaScript, Bootstrap
              </li>
              <li className="skills__skill">
                Backend: NodeJS, PHP (MVC), API Development
              </li>
              <li className="skills__skill">Database: MySQL, PhpMyAdmin</li>
              <li className="skills__skill">
                Tools: Git, GitHub, Postman, VS Code
              </li>
              <li className="skills__skill">
                Others: Microsoft Excel, Word, PowerPoint
              </li>
            </ul> */}
            <div className="skills">
              <div className="skills__skill">ReactJS</div>
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">NodeJS</div>
              {/* <div className="skills__skill">PHP (MVC)</div> */}
              <div className="skills__skill">API Development</div>
              <div className="skills__skill">MySQL</div>
              <div className="skills__skill">PhpMyAdmin</div>
              <div className="skills__skill">GitHub</div>
              <div className="skills__skill">Postman</div>
              <div className="skills__skill">VS Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutme;
