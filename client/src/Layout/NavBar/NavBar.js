import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { Spin as Hamburger } from "hamburger-react";


function NavBar() {
  // const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 1197);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsResponsive(screenWidth <= 1197); // Adjust breakpoint as needed
      console.log("Window width:", screenWidth);
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos > prevScrollPos && shopping) {
        setShopping(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, shopping]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToAbout = () => {
    setMenuOpen(false); // Close the menu if it's open

    // Use JavaScript to scroll to the "About Us" section smoothly
    document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToOurServices = () => {
    setMenuOpen(false); // Close the menu if it's open

    // Use JavaScript to scroll to the "About Us" section smoothly
    document.getElementById("ourservices").scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToHeroSection = () => {
    setMenuOpen(false); // Close the menu if it's open

    // Use JavaScript to scroll to the "About Us" section smoothly
    document.getElementById("herosection").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`${styles.header} ${visible ? "" : styles.hidden}`}
      style={{ backgroundColor: scrollY > 0 ? "var(--grays--color)" : "" }}
    >
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link className={styles.logo} to={"/"}>
            {/* <div className={styles.divImgLogo}> */}
            {/* <img width={"119px"} height={"36px"} src={logoo}style={{position:"relative"}}/>
            <img src={starLogo}className={styles.imgLogo}/>

            */}
            {/* </div> */}
            codeUp
          </Link>
        </div>

        <ul
          className={`${isResponsive ? "" : styles.navUl} ${
            isResponsive ? styles.dropdown : ""
          } ${menuOpen ? styles.active : ""}`}
        >
     
    
     <li className={styles.li}>
            <NavLink
              to={location.pathname === "/" ? "#" : "/"}
              className={styles.link}
              onClick={handleScrollToHeroSection} // Call handleScrollToHeroSection when clicked
            >
             Home
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink
              to={location.pathname === "/" ? "#" : "/"}
              className={styles.link}
              onClick={handleScrollToOurServices} // Call handleScrollToOurServices when clicked
            >
              Our Services
            </NavLink>
          </li>
     <li className={styles.li}>
            <NavLink
              to={location.pathname === "/" ? "#" : "/"}
              className={styles.link}
              onClick={handleScrollToAbout} // Call handleScrollToAbout when clicked
            >
              About Us
            </NavLink>
          </li>

       

         
       
        </ul>
        <div className={styles.containBtn}>
          
        {window.innerWidth <1200 &&(
          <div className={styles.hamburger} onClick={handleMenuClick}>
            <Hamburger
              easing="ease-in"
              label="Show menu"
              hideOutline={false}
              duration={0.8}
              toggled={menuOpen}
              color="var(--grays-color)"
            />
          </div>    )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
