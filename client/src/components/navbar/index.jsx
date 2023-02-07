import React from "react";
import activelogo3 from "../../images/navbar__top__logo3__active.svg";
import activelogo2 from "../../images/navbar__top__logo2__active.svg";
import activelogo1 from "../../images/navbar__top__logo1__active.svg";
import logo1 from "../../images/navbar__top__logo1.svg";
import logo2 from "../../images/navbar__top__logo2.svg";
import logo3 from "../../images/navbar__top__logo3.svg";
import style from "../navbar/navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  const [image1, setImage1] = useState(logo1);
  const [image2, setImage2] = useState(logo2);
  const [image3, setImage3] = useState(logo3);
  return (
    <div>
      <div className={style.navbar__top}>
        <div className={style.navbar__top__main}>
          <div className={style.navbar__top__images}>
            <img
              className={style.navbar__top__image}
              alt='-'
              src={image1}
              onMouseOver={() => setImage1(activelogo3)}
              onMouseOut={() => setImage1(logo1)}
            />
            <img
              className={style.navbar__top__image__middle}
              alt='-'
              src={image2}
              onMouseOver={() => setImage2(activelogo2)}
              onMouseOut={() => setImage2(logo2)}
            />
            <img
              className={style.navbar__top__image}
              alt='-'
              src={image3}
              onMouseOver={() => setImage3(activelogo1)}
              onMouseOut={() => setImage3(logo3)}
            />
          </div>
          <div className={style.navbar__top__links}>
            <p className={style.navbar__top__link}>Gaming</p>
            <p className={style.navbar__top__link}>Business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
