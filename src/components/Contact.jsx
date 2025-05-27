import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  PersonLinesFill,
  Person,
  Envelope,
  ChatSquareText,
  EmojiSmile,
  Linkedin,
  Github,
  Twitter,
  Lightbulb,
  RocketTakeoff,
  Discord,
} from "react-bootstrap-icons";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container shadow-sm">
        <div className="row">
          <div className="col-6 p-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="d-flex justify-content-center">
              <PersonLinesFill
                className="display-1 text-dark mb-4"
                color="#6d7dd2"
              />
            </div>

            <h2 className="text-center mb-4">Contact</h2>
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <Person className="me-1" color="#6d7dd2" size={20} /> Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <Envelope className="me-1" color="#6d7dd2" size={20} /> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  <ChatSquareText className="me-1" color="#6d7dd2" size={20} />{" "}
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div
            className="col-6"
            style={{ backgroundColor: "#6d7dd2" }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="p-5 text-white">
              <h3 className="display-5 fw-bold mb-4">
                Let's Make Magic Happen ✨
              </h3>

              <div className="mb-5">
                <div className="d-flex align-items-center mb-3">
                  <Lightbulb className="me-3" size={28} />
                  <p className="mb-0 fs-5">"Great ideas need great partners"</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <RocketTakeoff className="me-3" size={28} />
                  <p className="mb-0 fs-5">
                    Average response time: 24 hours (Earth time)
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <EmojiSmile className="me-3" size={28} />
                  <p className="mb-0 fs-5">
                    100% human - no bots here (except maybe Jarvis)
                  </p>
                </div>
              </div>

              <div className="border-top border-white-50 pt-4">
                <h4 className="fw-bold mb-3">Our Digital Hangouts</h4>
                <div className="d-flex gap-4">
                  <a href="#" className="text-white">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-white">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-white">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-white">
                    <Discord size={24} />
                  </a>
                </div>
              </div>

              {/* <div className="position-absolute bottom-0 start-0 p-4">
              <small className="text-white-50">
                P.S. First coffee is on us if you mention this message ☕
              </small>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
