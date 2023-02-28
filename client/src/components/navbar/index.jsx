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
import { Link, Navigate } from "react-router-dom";
import userIcon from "../../images/icons.svg";
import "./navbar.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.users);
  const [image1, setImage1] = useState(logo1);
  const [image2, setImage2] = useState(logo2);
  const [image3, setImage3] = useState(logo3);
  const [image4, setImage4] = useState(asusLogo);
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
                className={style.navbar__top__link}
              >
                Gaming
              </p>
              <p className={style.navbar__top__link}>Business</p>
            </div>
          </div>
        </div>
        <div className={style.navbar__bottom}>
          <i
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            class='fa-solid fa-bars'
          ></i>
          <div>
          <Link to='/'>
            <img
              className={style.navbar__bottom__logo}
              alt='yoxdu'
              src={image4}
              onMouseOver={() => setImage4(asusLogoActive)}
              onMouseOut={() => setImage4(asusLogo)}
            />
          </Link>
            
          </div>
          <div className={style.navbar__bottom__links}>
            <Link to='/mobile'>
              <p className={style.navbar__bottom__links__p}>Mobile</p>
            </Link>
            <Link to='/laptops'>
              <p className={style.navbar__bottom__links__p}>Laptops</p>
            </Link>
          </div>

          <div className={style.navbar__bottom__right}>
            <p className={style.navbar__bottom__support}>{user?.name}</p>
            <img
              className={style.navbar__bottom__icons1}
              alt='yoxdu'
              src={userIcon}
              onClick={() => {
                console.log(user)
              }}
            />
            <img
              onClick={() => {
                console.log(localStorage("token"))
                Navigate("/");
              }}
              className={style.navbar__bottom__icons}
              alt='yoxdu'
              src={searchIcon}
            />
          </div>
        </div>
      </div>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' style={{ margin: "0" }}>
          <div class='modal-content'>
            <div class='modal-header'>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <Link to='/mobile'>
                {" "}
                <p className={style.navbar__bottom__links__p}>Mobile</p>
              </Link>
              <Link to='/laptops'>
                <p className={style.navbar__bottom__links__p}>Laptops</p>
              </Link>
            </div>
            <div className='modal-body1'>
              <p className='support'>Support</p>
              <div>
                <img className='usericon' alt='yoxdu' src={userIcon} />
                <Link to='/user/register'>
                  <p>My Account</p>
                </Link>
              </div>
            </div>
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
