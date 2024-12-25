import github from "../assets/png/github-ico.png"
import insta from "../assets/png/insta-ico.png"
import yt from "../assets/png/yt-ico.png"
import linkedin from "../assets/png/linkedin-ico.png"
import Email from "../assets/png/email-ico.png"
import common from "../assets/svg/common-bg.svg"



function first_section() {
  const handleClick = () => {
    console.log("hello")
    // Change 'your@email.com' to your actual email address
    const email = 'visheshparmar99v4@gmail.com';
    
    // Create a mailto link
    const mailtoLink = `mailto:${email}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };



  return (
   <>
    <div className="themeClrSelector"  >
      <input type="color" value="#0078d7" className="themeClrSelector__input"/>
      <img
        src="https://img.icons8.com/fluent/48/000000/rgb-circle-1.png"
        className="themeClrSelector__img"
      />
    </div>
    <section className="home-hero dynamicBg">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is Vishesh Parmar</h1>
        <div className="home-hero__info">
          <p className="text-primary">
          A passionate frontend developer with a keen eye for crafting engaging user experiences.
           With a solid foundation in frontend technologies and a drive for continuous learning.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a target="_blank" href="https://www.linkedin.com/in/vishesh-parmar-04b466194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home-hero__social-icon-link">
            <img
              src={linkedin}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/vishesh425" target="_blank" className="home-hero__social-icon-link">
            <img
              src={github}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="#" target="_blank" className="home-hero__social-icon-link">
            <img
              src={Email}
              alt="icon"
              className="home-hero__social-icon"
              onClick={handleClick} 
            />
          </a>
          {/* <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src={twitter}
                  alt="icon"
                  onClick={handleClick} 
                />
              </a> */}
        </div>
        {/* <div className="home-hero__social">
          <a href="#" className="home-hero__social-icon-link">
            <img
              src={yt}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="#"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src={insta}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div> */}
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
   </>
  );
}

export default first_section;
