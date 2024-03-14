import React from "react";
import { NavLink } from "react-router-dom";

import style from "./HeroSection.module.css";
function HeroSection() {
  return (
    <section id="herosection" className={style.container}>
      <div className={style.right}>
        <div className={style.div}>
          <h1 className={style.header}>
            Welcome to Codeup- Where Innovation Meets Web Excellence
          </h1>
          <p className={style.action}>
            Empowering Your Digital Journey Transforming Ideas into Exceptional
            Websites.{" "}
            <button className={style.btnaction}>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "var(--cream-color" }}
              >
                Call US Now!
              </NavLink>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
