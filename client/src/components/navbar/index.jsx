import React from "react";
import activelogo3 from "../../images/navbar__top__logo3__active.svg";
import activelogo2 from "../../images/navbar__top__logo2__active.svg";
import activelogo1 from "../../images/navbar__top__logo1__active.svg";
import logo1 from "../../images/navbar__top__logo1.svg";
import logo2 from "../../images/navbar__top__logo2.svg";
import logo3 from "../../images/navbar__top__logo3.svg";
import asusLogo from "../../images/asus__logo.png";
import asusLogoActive from "../../images/pngwing.com.png";
import style from "../navbar/navbar.module.css";
import searchIcon from "../../images/icon.svg";
import userIcon from "../../images/icons.svg";
import { useState } from "react";
const Navbar = () => {
  const [image1, setImage1] = useState(logo1);
  const [image2, setImage2] = useState(logo2);
  const [image3, setImage3] = useState(logo3);
  const [image4, setImage4] = useState(asusLogo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  return (
    <React.Fragment>
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
              <p
                onMouseOver={() => setIsModalOpen(true)}
                className={style.navbar__top__link}
              >
                Gaming
              </p>
              <p className={style.navbar__top__link}>Business</p>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div  className={style.navbar__modal__width}>
            <div
              className={style.navbarmodal}
              onMouseOver={() => setIsModalOpen(true)}
              onMouseOut={() => setIsModalOpen(false)}
            >
              <p className={style.navbarmodal__links}>
                ROG - Republic Of Gamers
              </p>
              <p className={style.navbarmodal__links}>TUF Gaming</p>
            </div>
          </div>
        )}
        <div className={style.navbar__bottom}>
          <div>
            <img
              className={style.navbar__bottom__logo}
              alt='yoxdu'
              src={image4}
              onMouseOver={() => setImage4(asusLogoActive)}
              onMouseOut={() => setImage4(asusLogo)}
            />
          </div>
          <div className={style.navbar__bottom__links}>
            <p
              onMouseOver={() => {
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              Mobile
            </p>
            <p
              onMouseOver={() => {
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              Laptops
            </p>
            <p
              onMouseOver={() =>{
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              Display / Destkops
            </p>
            <p
              onMouseOver={() => {
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              MotherBoards / Components
            </p>
            <p
              onMouseOver={() => {
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              Networking / IoT / Servers
            </p>
            <p
              onMouseOver={() => {
                setIsModalOpen1(true);
              }}
              className={style.navbar__bottom__links__p}
            >
              Accesories
            </p>
          </div>
          <div className={style.navbar__bottom__right}>
            <p className={style.navbar__bottom__support}>Support</p>
            <img
              className={style.navbar__bottom__icons}
              alt='yoxdu'
              src={userIcon}
            />
            <img
              className={style.navbar__bottom__icons}
              alt='yoxdu'
              src={searchIcon}
            />
          </div>
        </div>
      </div>
      {isModalOpen1 && (
        <div
          className={style.navbarmenu}
          onMouseOver={() => setIsModalOpen1(true)}
          onMouseOut={() => setIsModalOpen1(false)}
        >
          <div></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
