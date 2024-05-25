
function contactus() {
    return (
      <section id="contact" class="contact sec-pad dynamicBg">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main heading-sec__main--lt">Contact</span>
            <span class="heading-sec__sub heading-sec__sub--lt">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
              tempora explicabo quae quod deserunt eius sapiente */}
            </span>
          </h2>
          <div class="contact__form-container">
            <form action="#" class="contact__form">
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">Name</label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  class="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="email">Email</label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="text"
                  class="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="message">Message</label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  class="contact__form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn--theme contact__btn dynamicBgClr">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default contactus;
  