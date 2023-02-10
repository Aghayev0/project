import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselImage1 from "../../images/carouselimage1.jpg";
import CarouselImage2 from "../../images/carouselimage2.jpg";
import CarouselImage3 from "../../images/carouselimage3.jpg";
import CarouselImage4 from "../../images/carouselimage4.jpg";
import CarouselImage5 from "../../images/carouselimage5.jpg";
import bodyImage from "../../images/bodyimage1.webp";
import laptopImage1 from "../../images/laptopimg1.png";
import laptopLabel1 from "../../images/laptoplabel1.png";
import laptopImage2 from "../../images/laptopimg2.png";
import laptopLabel2 from "../../images/laptoplabel2.png";
import laptopImage3 from "../../images/laptopimg3.jpg";
import laptopLabel3 from "../../images/laptoplabel3.png";
import laptopImage4 from "../../images/laptopimg4.jpg";
import news1 from "../../images/news1.jpg";
import news2 from "../../images/news2.jpg";
const Home = () => {
  return (
    <div>
      <div className={style.register}>
        <Link to='/' className={style.register__link}>
          Create an ASUS account today to register your product for better
          support.
        </Link>
      </div>
      <div className={style.carousel}>
        <Carousel
          infiniteLoop={true}
          stopOnHover={true}
          showThumbs={false}
          showIndicators={false}
          autoPlay={false}
        >
          <div>
            <img alt='' src={CarouselImage1} />
            <div className={style.carousel__text__right}>
              <h1>Sustainability</h1>
              <h2>
                We strive to make a positive impact on the planet through all
                that we do.
              </h2>
              <Link className={style.learnmore} to=''>
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img alt='' src={CarouselImage2} />
            <div className={style.carousel__text__left}>
              <h1>ASUS H770 & B760 Series</h1>
              <h2>AEMP II for DDR5 Overclocking & Robust Power Solution</h2>
              <Link className={style.learnmore} to=''>
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img alt='' src={CarouselImage3} />
            <div className={style.carousel__text__right}>
              <h1>ASUS Business PCs at CES 2023</h1>
              <h2>Sustaining an incredible future</h2>
              <Link className={style.learnmore} to=''>
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img alt='' src={CarouselImage4} />
            <div className={style.carousel__text__left__black}>
              <h1>Sustaining an incredible future</h1>
              <h2>Whole-Home Coverage, Always Secure.</h2>
              <Link className={style.learnmore} to=''>
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img alt='' src={CarouselImage5} />
          </div>
        </Carousel>
      </div>
      <div className={style.bodyimage}>
        <img alt='' src={bodyImage} />
        <div className={style.carousel__text__right}>
          <h1>Sustainability</h1>
          <h2>
            We strive to make a positive impact on the planet through all that
            we do.
          </h2>
          <Link className={style.learnmore} to=''>
            Learn More
          </Link>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <img alt='' src={laptopLabel1} />
          <p>Born for Creative Pros in 3D</p>
          <Link className={style.learnMore} to=''>
            Learn More
          </Link>
          <img alt='' src={laptopImage1} />
        </div>
        <div className={style.card}>
          <img alt='' src={laptopLabel2} />
          <p>Born for Creative Pros in 3D</p>
          <Link className={style.learnMore} to=''>
            Learn More
          </Link>
          <img alt='' src={laptopImage2} />
        </div>
        <div className={style.card}>
          <img alt='' src={laptopLabel3} />
          <p>Born for Creative Pros in 3D</p>
          <Link className={style.learnMore} to=''>
            Learn More
          </Link>
          <img alt='' src={laptopImage3} />
        </div>
        <div className={style.card}>
          <h1 className={style.card__text}>ASUS Chromebook CM14</h1>
          <p>Born for Creative Pros in 3D</p>
          <Link className={style.learnMore} to=''>
            Learn More
          </Link>
          <img alt='' src={laptopImage4} />
        </div>
      </div>
      <div className={style.news}>
        <img className={style.news__image} alt='' src={news1} />
        <img className={style.news__image} alt='' src={news2} />
      </div>
      <div className={style.hover}>
        <div className={style.hoverimage}>
          <div className={style.hoverimage1}></div>
          <div className={style.hovertext}>
            <h1>The best fast-paced racing games for the ROG Phone 6</h1>
            <p>
              When it comes to high-end mobile gaming, there's truly nothing
              better than the ROG Phone 6 — but you need great games to go with
              it.
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
