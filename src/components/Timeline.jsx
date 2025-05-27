import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experience" className="py-5 bg-light" data-aos="fade-right">
      <div className="container text-center">
        <h2>Experience</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline5">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2018</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">Web Desginer</h3>
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
                  <h3 className="title">Web Desginer</h3>
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
        .main-timeline5 .timeline-icon{width:210px;height:210px;border-radius:50%;border:25px solid transparent;border-top-color:#ffc107;border-right-color:#ffc107;z-index:1;transform:rotate(45deg)}
        .main-timeline5 .year{display:block;width:110px;height:110px;line-height:110px;border-radius:50%;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.4);font-size:30px;font-weight:700;color:#ffc107;text-align:center;transform:rotate(-45deg)}
        .main-timeline5 .timeline-content{width:35%;float:right;background:#ffc107;padding:30px 20px;margin:50px 0;z-index:1;position:relative}
        .main-timeline5 .timeline-content:before{content:"";width:20%;height:15px;background:#ffc107;position:absolute;top:50%;left:-20%;z-index:-1;transform:translateY(-50%)}
        .main-timeline5 .title{font-size:20px;font-weight:700;color:#fff;margin:0 0 10px}
        .main-timeline5 .description{font-size:16px;color:#fff;line-height:24px;margin:0}
        // .main-timeline5 .timeline:nth-child(2n):before{box-shadow:8px 0 5px -5px rgba(0,0,0,.5) inset}
        .main-timeline5 .timeline:nth-child(2n) .timeline-icon{transform:rotate(-135deg);border-top-color:#6c95d3;border-right-color:#6c95d3}
        .main-timeline5 .timeline:nth-child(2n) .year{transform:rotate(135deg);color:#6c95d3}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content{float:left}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content:before{left:auto;right:-20%}
        .main-timeline5 .timeline:nth-child(2n) .timeline-content,.main-timeline5 .timeline:nth-child(2n) .timeline-content:before{background:#6c95d3}
        .main-timeline5 .timeline:nth-child(3n) .timeline-icon{border-top-color:#6d7dd2;border-right-color:#6d7dd2}
        .main-timeline5 .timeline:nth-child(3n) .year{color:#6d7dd2}
        .main-timeline5 .timeline:nth-child(3n) .timeline-content,.main-timeline5 .timeline:nth-child(3n) .timeline-content:before{background:#6d7dd2}
        .main-timeline5 .timeline:nth-child(4n) .timeline-icon{border-top-color:#39558e;border-right-color:#39558e}
        .main-timeline5 .timeline:nth-child(4n) .year{color:#39558e}
        .main-timeline5 .timeline:nth-child(4n) .timeline-content,.main-timeline5 .timeline:nth-child(4n) .timeline-content:before{background:#39558e}
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
