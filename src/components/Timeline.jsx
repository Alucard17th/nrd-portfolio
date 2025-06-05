import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experience from "../assets/gifs/new-experience.gif";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experience" className="py-5 bg-white" data-aos="fade-right">
      <div className="container text-center">
        <div className="gif d-flex align-items-center justify-content-start">
          <img
            src={experience}
            alt="GIF"
            className="img-fluid me-1"
            style={{ maxWidth: "10%" }}
          />
          <h2
            className="fw-bold text-center mb-4"
            style={{ letterSpacing: "12px" }}
          >
            Experience
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline5">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2018</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                    Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2017</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                    Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2016</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                    Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2015</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia mi ultrices, luctus nunc ut, commodo enim.
                    Vivamus sem erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .main-timeline5{overflow:hidden;position:relative}
        .main-timeline5 .timeline{position:relative;margin-top:-79px}
        .main-timeline5 .timeline:first-child{margin-top:0}
        .main-timeline5 .timeline-icon,.main-timeline5 .year{margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}
        .main-timeline5 .timeline:after,.main-timeline5 .timeline:before{content:"";display:block;width:100%;clear:both}
        .main-timeline5 .timeline:before{content:"";width:100%;height:100%;position:absolute;top:0;right:0;z-index:2}
        .main-timeline5 .timeline-icon{width:210px;height:210px;border-radius:50%;border:25px solid transparent;border-top-color:#ffc107;border-right-color:#ffc107;z-index:1;transform:rotate(45deg); transition: all 0.5s ease}
        .main-timeline5 .year{display:block;width:110px;height:110px;line-height:110px;border-radius:50%;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.4);font-size:30px;font-weight:700;color:#ffc107;text-align:center;transform:rotate(-45deg); transition: all 0.5s ease}
        .main-timeline5 .timeline-content{width:35%;float:right;background:#ffc107;padding:30px 20px;margin:50px 0;z-index:1;position:relative; 
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transform: translateY(0);
        }
        .main-timeline5 .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .main-timeline5 .timeline-content:before {
          content:"";
          width:20%;
          height:15px;
          background:#ffc107;
          position:absolute;
          top:50%;
          left:-20%;
          z-index:-1;
          transform:translateY(-50%);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .main-timeline5 .timeline-content:hover:before {
          transform: translateY(-50%) translateX(5px);
        }
        .main-timeline5 .title{font-size:20px;font-weight:700;color:#fff;margin:0 0 10px; transition: all 0.3s ease}
        .main-timeline5 .description{font-size:16px;color:#fff;line-height:24px;margin:0; transition: all 0.3s ease}
        .main-timeline5 .timeline-content:hover .title {
          transform: translateY(-2px);
        }
        .main-timeline5 .timeline-content:hover .description {
          transform: translateY(-1px);
        }
        .main-timeline5 .timeline:hover .timeline-icon {
          transform: rotate(60deg);
        }
        .main-timeline5 .timeline:hover .year {
          transform: rotate(-60deg);
        }
        
        /* Water ripple effect */
        .main-timeline5 .timeline-content:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .main-timeline5 .timeline-content:hover:after {
          opacity: 1;
          animation: waterRipple 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        
        @keyframes waterRipple {
          0% {
            transform: scale(0.95);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.05);
            opacity: 0;
          }
        }
        
        .main-timeline5 .timeline:nth-child(2n) .timeline-icon{transform:rotate(-135deg);border-top-color:#36cdcd;border-right-color:#36cdcd}
        .main-timeline5 .timeline:nth-child(2n) .year{transform:rotate(135deg);color:#36cdcd}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content{float:left}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content:before{left:auto;right:-20%}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content,.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{background:#36cdcd}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content:hover:before {
          transform: translateY(-50%) translateX(-5px);
        }
        .main-timeline5 .timeline:nth-child(3n) .timeline-icon{border-top-color:#6d7dd2;border-right-color:#6d7dd2}
        .main-timeline5 .timeline:nth-child(3n) .year{color:#6d7dd2}
        .main-timeline5 .timeline:nth-child(3n) .timeline-content,.main-timeline5 .timeline:nth-child(3n) .timeline-content:before{background:#6d7dd2}
        .main-timeline5 .timeline:nth-child(4n) .timeline-icon{border-top-color:#39558e;border-right-color:#39558e}
        .main-timeline5 .timeline:nth-child(4n) .year{color:#39558e}
        .main-timeline5 .timeline:nth-child(4n) .timeline-content,.main-timeline5 .timeline:nth-child(4n) .timeline-content:before{background:#39558e}
        
        /* Hover effects for alternate timeline items */
        .main-timeline5 .timeline:nth-child(2n):hover .timeline-icon {
          transform: rotate(-150deg);
        }
        .main-timeline5 .timeline:nth-child(2n):hover .year {
          transform: rotate(150deg);
        }
        
        @media only screen and (max-width:1199px){.main-timeline5 .timeline{margin-top:-103px}
        .main-timeline5 .timeline-content:before{left:-18%}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content:before{right:-18%}
        }
        @media only screen and (max-width:990px){.main-timeline5 .timeline{margin-top:-127px}
        .main-timeline5 .timeline-content:before{left:-2%}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content:before{right:-2%}
        }
        @media only screen and (max-width:767px){.main-timeline5 .timeline{margin-top:0;overflow:hidden}
        .main-timeline5 .timeline:before,.main-timeline5 .timeline:nth-child(2n):before{box-shadow:none}
        .main-timeline5 .timeline-icon,.main-timeline5 .timeline:nth-child(2n) .timeline-icon{margin-top:-30px;margin-bottom:20px;position:relative;transform:rotate(135deg)}
        .main-timeline5 .timeline:nth-child(2n) .year,.main-timeline5 .year{transform:rotate(-135deg)}
        .main-timeline5 .timeline-content,.main-timeline5 .timeline:nth-child(2n) .timeline-content{width:100%;float:none;border-radius:0 0 20px 20px;text-align:center;padding:25px 20px;margin:0 auto}
        .main-timeline5 .timeline-content:before,.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{width:15px;height:25px;position:absolute;top:-22px;left:50%;z-index:-1;transform:translate(-50%,0)}
        }
        `}
      </style>
    </section>
  );
};

export default Timeline;
