import React from "react";
import Slider from "react-slick";
import style from "./OurServices.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function OurServices() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplaySpeed: 2500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={style.contentsection} id="ourservices">
      <h1>Our Services</h1>
      <p className={style.right}>
        At Codeup, our mission is to inspire and enable aspiring developers to
        create stunning, functional websites that not only meet but exceed
        industry standards, fostering creativity, collaboration, and excellence
        in web development.
      </p>
      <div className={style.cards}>
        <Slider {...settings}>
          <div className={style.card}>
            <h2>Web Design & Development:</h2>
            <div className={style.hoverDetails}>
              <span className={style.desc}>
                Craft visually stunning and user-friendly websites tailored to
                your brand and audience.
              </span>
            </div>
          </div>
          <div className={style.card}>
            <h2>E-commerce Solutions</h2>
            <div className={style.hoverDetails}>
              <span className={style.desc}>
                Build robust online stores with seamless navigation, secure
                transactions, and personalized user experiences.
              </span>
            </div>
          </div>
          <div className={style.card}>
            <h2>Mobile App Development:</h2>
            <div className={style.hoverDetails}>
              <span className={style.desc}>
                Create engaging and intuitive mobile applications for iOS and
                Android platforms, reaching customers on the go.
              </span>
            </div>{" "}
          </div>
          <div className={style.card}>
            <h2>UI/UX Design:</h2>
            <div className={style.hoverDetails}>
              <span className={style.desc}>
                4. Enhance user satisfaction and engagement through intuitive
                interface design and seamless user experiences.
              </span>
            </div>{" "}
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default OurServices;
