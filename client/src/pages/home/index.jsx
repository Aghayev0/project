import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import laptopLabel1 from "../../images/laptoplabel1.png";
import laptopLabel2 from "../../images/laptoplabel2.png";
import laptopLabel3 from "../../images/laptoplabel3.png";
const Home = () => {
  return (
      <div>
        <div className={style.register}>
          <Link to='/user/register' className={style.register__link}>
            Create an ASUS account today to register your product for better
            support.
          </Link>
        </div>
        <div className='carousel'>
          <div
            id='carouselExampleAutoplaying'
            class='carousel slide'
            data-bs-ride='carousel'
          >
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <div className={style.carouselimage1}>
                  <div className={style.carouselimagewidth}>
                    <h1>Sustainability</h1>
                    <h3>
                      We strive to make a positive impact on the planet through
                      all that we do.
                    </h3>
                    <p>
                      Learn More <i class='fa-solid fa-chevron-right'></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class='carousel-item '>
                <div className={style.carouselimage2}>
                  <div className={style.carouselimagewidth2}>
                    <h1>ASUS H770 & B760 Series</h1>
                    <h3>
                      AEMP II for DDR5 Overclocking & Robust Power Solution
                    </h3>
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
              <div class='carousel-item '>
                <div className={style.carouselimage3}></div>
              </div>
              <div class='carousel-item '>
                <div className={style.carouselimage5}></div>
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleAutoplaying'
              data-bs-slide='prev'
              style={{ width: "10%" }}
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleAutoplaying'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.card1}>
            <img alt='' src={laptopLabel1} />
            <p>Born for Creative Pros in 3D</p>
            <Link className={style.learnMore} to='/proart'>
              Learn More
            </Link>
          </div>
          <div className={style.card2}>
            <img alt='' src={laptopLabel2} />
            <p>Born for Creative Pros in 3D</p>
            <Link className={style.learnMore} to='/vivobook'>
              Learn More
            </Link>
          </div>
          <div className={style.card3}>
            <img alt='' src={laptopLabel3} />
            <p>Born for Creative Pros in 3D</p>
            <Link className={style.learnMore} to='/chromebook'>
              Learn More
            </Link>
          </div>
          <div className={style.card4}>
            <h1 className={style.card__text}>ASUS Chromebook CM14</h1>
            <p>Born for Creative Pros in 3D</p>
            <Link className={style.learnMore} to='/chromebook'>
              Learn More
            </Link>
          </div>
        </div>
        <div className={style.news}>
          <div className={style.newsimg1}></div>
          <div className={style.newsimg2}></div>
        </div>
        <div className={style.hover}>
          <div className={style.hoverimage}>
            <div className={style.hoverimage1}></div>
            <div className={style.hovertext}>
              <h1>The best fast-paced racing games for the ROG Phone 6</h1>
              <p>
                When it comes to high-end mobile gaming, there's truly nothing
                better than the ROG Phone 6 — but you need great games to go
                with it.
              </p>
            </div>
          </div>
          <div className={style.hoverright}>
            <div className={style.hoverimage2}>
              <div className={style.hoverimage21}></div>
              <div className={style.hovertext1}>
                <h1>The best fast-paced racing games for the ROG Phone 6</h1>
                <p>
                  When it comes to high-end mobile gaming, there's truly nothing
                  better than the ROG Phone 6 — but you need great games to go
                  with it.
                </p>
              </div>
            </div>
            <div className={style.hoverimage4}>
              <div className={style.hoverimage41}></div>
              <div className={style.hovertext1}>
                <h1>The best fast-paced racing games for the ROG Phone 6</h1>
                <p>
                  When it comes to high-end mobile gaming, there's truly nothing
                  better than the ROG Phone 6 — but you need great games to go
                  with it.
                </p>
              </div>
            </div>
            <div className={style.hoverimage5}>
              <div className={style.hoverimage51}></div>
              <div className={style.hovertext1}>
                <h1>The best fast-paced racing games for the ROG Phone 6</h1>
                <p>
                  When it comes to high-end mobile gaming, there's truly nothing
                  better than the ROG Phone 6 — but you need great games to go
                  with it.
                </p>
              </div>
            </div>
            <div className={style.hoverimage6}>
              <div className={style.hoverimage61}></div>
              <div className={style.hovertext1}>
                <h1>The best fast-paced racing games for the ROG Phone 6</h1>
                <p>
                  When it comes to high-end mobile gaming, there's truly nothing
                  better than the ROG Phone 6 — but you need great games to go
                  with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
