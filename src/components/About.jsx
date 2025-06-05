import { useEffect, useRef } from "react";
import avatar from "../assets/dev.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  
  useEffect(() => {
        AOS.init();
      }, [])

  const skills = [
    { name: "HTML5", color: "E34F26", icon: "html5", level: 90 },
    { name: "CSS3", color: "1572B6", icon: "css3", level: 85 },
    { name: "JavaScript", color: "F7DF1E", textColor: "black", icon: "javascript", level: 80 },
    { name: "React", color: "61DAFB", icon: "react", level: 75 },
    { name: "Laravel", color: "FF2D20", icon: "laravel", level: 70 },
    { name: "PHP", color: "777BB4", icon: "php", level: 75 },
    { name: "MySQL", color: "4479A1", icon: "mysql", level: 65 },
    { name: "Bootstrap", color: "7952B3", icon: "bootstrap", level: 85 },
    { name: "Wordpress", color: "21759B", icon: "wordpress", level: 60 },
    { name: "WooCommerce", color: "96588A", icon: "woocommerce", level: 55 },
    { name: "Vue.js", color: "4FC08D", icon: "vue.js", level: 50 },
    { name: "Git", color: "F05032", icon: "git", level: 70 },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const level = parseInt(progressBar.getAttribute('aria-valuenow'));
            progressBar.style.width = '0%';
            
            // Trigger reflow
            progressBar.offsetHeight;
            
            // Animate to full width
            progressBar.style.width = `${level}%`;
            progressBar.style.transition = `width 1.5s ease-out`;
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="bg-white py-5"  data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={'/gifs/developer.gif'}
              alt="About Noureddine"
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>

          {/* Right: Content */}
          <div className="col-md-7 animate__animated animate__fadeInRight animate__delay-1s">
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              I'm a passionate <strong>Full Stack Developer</strong> focused on
              delivering high-performance and elegant digital experiences. I
              specialize in <strong>React</strong> and <strong>Laravel</strong>,
              and enjoy turning complex ideas into intuitive UI and robust
              backend logic.
            </p>
            <p>
              With a strong foundation in modern web technologies and a keen eye
              for design, I thrive in cross-functional teams and love building
              products that solve real-world problems.
            </p>
            <a href="#contact" className="btn btn-warning mt-3">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
      
      <div id="technologies" className="container mt-5 animate__animated animate__fadeInUp animate__delay-1s">
        
        <div className="gif d-flex align-items-center justify-content-start">
          <img
            src={"/gifs/new-rocket.gif"}
            alt="GIF"
            className="img-fluid me-1"
            style={{ maxWidth: "10%" }}
          />
          <h2 className="fw-bold text-center mb-4" style={{letterSpacing: "12px"}}>Technologies</h2>
        </div>
        
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div 
              className="col-md-3 col-sm-4 col-6" 
              key={skill.name}
              ref={el => skillRefs.current[index] = el}
            >
              <div className="skill-badge-card p-3 text-center h-100">
                <div className="skill-icon mb-2">
                  <img
                    src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.icon}&logoColor=white`}
                    alt={skill.name}
                    className="img-fluid skill-badge"
                  />
                </div>
                <div className="skill-level mt-2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "0%", // Start at 0% for animation
                        backgroundColor: `#${skill.color}`,
                        transition: "none" // Initial state with no transition
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-1">{skill.level}%</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="position-relative w-100">
        <svg
          viewBox="0 0 1440 320"
          style={{ display: "block", width: "100%", height: "120px" }}
          preserveAspectRatio="none"
        >
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,192 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div> */}

      <style>{`
        .skill-badge-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
          background: #ffc10738;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .skill-badge-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          cursor: pointer;
        }
        
        .progress {
          height: 6px;
          border-radius: 3px;
          background-color: #f0f0f0;
          overflow: hidden;
        }
        
        .progress-bar {
          height: 100%;
          border-radius: 3px;
          position: relative;
        }
        
        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%);
        }
      `}</style>
    </section>
  );
};

export default About;