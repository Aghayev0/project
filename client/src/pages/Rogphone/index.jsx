import React, { useEffect, useState } from "react";
import categoryImg1 from "../../images/img1.webp";
import categoryImg2 from "../../images/img2.webp";
import categoryImg3 from "../../images/img3.webp";
import { Link } from "react-router-dom";
import "../pro/pro.scss";
import axios from "axios";
const ROG = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/mobiles/get")
      .then((res) => setPro(res.data));
  }, []);
  return (
    <div>
      <div>
      <div className='categorycarousel'>
        <div id='carouselExampleIndicators' class='carousel slide'>
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <div className='carouselimg1'></div>
            </div>
            <div class='carousel-item'>
              <div className='carouselimg2'></div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='categoryimg'>
        <div className='categoryimg__mid'>
          <div>
            <Link to='/mobile'>
              <img alt='' src={categoryImg1} />
            </Link>
            <p>All Series</p>
          </div>
          <div>
            <Link to='/zenfone'>
              <img alt='' src={categoryImg2} />
            </Link>
            <p>Zenfone</p>
          </div>
          <div>
            <Link to='/rogphone'>
              <img alt='' src={categoryImg3} />
            </Link>
            <p>ROG Phone</p>
          </div>
        </div>
      </div>
        <div className='zenbook'>
          <div className='zenbook__cards'>
            {pro &&
              pro
                .filter((item) => item.name.includes("ROG"))
                .map((data) => (
                  <div className='zenbook__cards__1'>
                    <img alt='' src={data.image} />
                    <p>{data.display}</p>
                    <h1>{data.name}</h1>
                    <ul>
                      <li><span>Guarantee : </span>{data.guarantee}</li>
                      <li><span>Price : </span>{data.price}</li>
                    </ul>
                    <Link key={data._id} to={`/phonedetails/${data._id}`}>
                      <button>Learn More</button>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROG;
