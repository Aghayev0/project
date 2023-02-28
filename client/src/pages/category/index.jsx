import React, { useEffect, useState } from "react";
import "./category.scss";
import categoryImg1 from "../../images/img1.webp";
import categoryImg2 from "../../images/img2.webp";
import categoryImg3 from "../../images/img3.webp";
import { Link } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [phones, Setphones] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/mobiles/get")
      .then((res) => Setphones(res.data));
  }, []);
  return (
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
            <Link to=''>
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
      <div className='laptops'>
        <div className='laptops__pro'>
          <h1>Zenfone</h1>
          <p>
            Zenfone is an extraordinary smartphone that combines stylish design
            with the latest high-end components and software. Take superb
            quality photos, play the latest mobile games on the go, and much
            more, with a phone that truly sets you apart from the crowd.
          </p>
          <div>
            <div className='laptops__pro__cards'>
              {phones &&
                phones
                  .filter((item) => item.name.includes("Zenfone"))
                  .map((data) => (
                    <div className='laptops__pro__cards__card'>
                      <h1>{data.name}</h1>
                      <img src={data.image} alt='' />
                      <p>{data.title}</p>
                      <Link to='/zenfone'>
                        <button>See All</button>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className='laptops__pro'>
          <h1>ROG Phone</h1>
          <p>
            ROG Phone introduces a landscape-oriented design, featuring unique
            AirTriggers that enable precise control with a more comfortable
            grip. Its specially tuned high-performance processor stretches
            beyond stock speeds to deliver dominating performance, while its
            responsive, ultrafast display offers an unbeatable blend of high
            refresh rates and visual fidelity.
          </p>
          <div>
            <div className='laptops__pro__cards'>
              {phones &&
                phones
                  .filter((item) => item.name.includes("ROG"))
                  .map((data) => (
                    <div className='laptops__pro__cards__card'>
                      <h1>{data.name}</h1>
                      <img src={data.image} alt='' />
                      <p>{data.title}</p>
                      <Link to='/rogphone'>
                        <button>See All</button>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Category;
