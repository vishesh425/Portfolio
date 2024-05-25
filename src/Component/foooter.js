import github from "../assets/png/github-ico.png"
import insta from "../assets/png/insta-ico.png"
import yt from "../assets/png/yt-ico.png"
import linkedin from "../assets/png/linkedin-ico.png"
import twitter from "../assets/png/email-ico.png"

function footer() {
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
<footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishesh-parmar-04b466194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img
                  class="main-footer__icon"
                  src={linkedin}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/vishesh425">
                <img
                  class="main-footer__icon"
                  src={github}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src={twitter}
                  alt="icon"
                  onClick={handleClick} 
                />
              </a>
              {/* <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src={yt}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={insta}
                  alt="icon"
                />
              </a> */}
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Vishesh Parmar</h4>
            <p class="main-footer__short-desc">
            Frontend developer passionate about crafting engaging user experiences through self-learning projects
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2024. Made by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"></a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
