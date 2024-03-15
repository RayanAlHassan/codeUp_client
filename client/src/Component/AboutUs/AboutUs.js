import React from "react";
import pd from "../../assets/images/aboutus.jpeg"
import style from "./AboutUs.module.css"; // Import the CSS module
// import trust from "../../assets/images/"
function AboutUs() {
  return (
    <section id="aboutus" className={style.all}>
   
    <h1 className={style.header}>About Us</h1> {/* Apply the 'header' class */}

    <div className={style.container}> 

      <div className={style.left}>
        <img className={style.imgg} src={pd} width="100%" height="100%" />
        
        </div> {/* Apply the 'left' class */}
      <div className={style.right}>
        {/* <div className={style.div}> */}
          <p className={style.action}> {/* Apply the 'action' class */}
            Welcome to <span className={style.span}>CodeUp</span>, our mission is to inspire and enable aspiring developers to create stunning, functional websites that not only meet but exceed industry standards, fostering creativity, collaboration, and excellence in web development. Thank you for choosing <span  className={style.span}>CodeUp</span> as your
            trusted Tech advisor.
          </p>
        </div>
      {/* </div> */}
    </div>
    </section>
  );
}

export default AboutUs;
