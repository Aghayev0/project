import React, { useEffect, useState } from "react";
import categoryImg1 from "../../images/laptopcatimg1.png";
import categoryImg2 from "../../images/laptopcatimg2.png";
import categoryImg3 from "../../images/laptopcatimg3.png";
import categoryImg4 from "../../images/laptopcatimg4.png";
import categoryImg5 from "../../images/laptopcatimg5.png";
import { Link } from "react-router-dom";
import "./pro.scss";
import axios from "axios";
const Pro = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/laptops/get")
      .then((res) => setPro(res.data));
  }, []);
  return (
    <div>
      <div>
        <div className='laptopcarousel'>
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
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='3'
                aria-label='Slide 4'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='4'
                aria-label='Slide 5'
              ></button>
            </div>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <div className='carouselimg1'></div>
              </div>
              <div class='carousel-item'>
                <div className='carouselimg2'></div>
              </div>
              <div class='carousel-item'>
                <div className='carouselimg3'></div>
              </div>
              <div class='carousel-item'>
                <div className='carouselimg4'></div>
              </div>
              <div class='carousel-item'>
                <div className='carouselimg5'></div>
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'
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
              data-bs-target='#carouselExampleIndicators'
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
        <div className='categoryimg'>
          <div className='categoryimg__mid1'>
            <div>
              <Link to='/laptops'>
                <img alt='' src={categoryImg1} />
              </Link>

              <p>All Series</p>
            </div>
            <div>
              <Link to='/proart'>
                <img alt='' src={categoryImg2} />
              </Link>
              <p>ProArt StudioBook</p>
            </div>
            <div>
              <Link to='/zenbook'>
                <img alt='' src={categoryImg3} />
              </Link>
              <p>ZenBook</p>
            </div>
            <div>
              <Link to='/vivobook'>
                <img alt='' src={categoryImg4} />
              </Link>
              <p>Vivobook</p>
            </div>
            <div>
              <Link to='/chromebook'>
                <img alt='' src={categoryImg5} />
              </Link>
              <p>Chromebook</p>
            </div>
          </div>
        </div>
        <div className='zenbook'>
          <div className='zenbook__cards'>
            {pro &&
              pro
                .filter((item) => item.name.includes("ProArt"))
                .map((data) => (
                  <div className='zenbook__cards__1'>
                    <img alt='' src={data.image} />
                    <p>{data.display}</p>
                    <h1>{data.name}</h1>
                    <ul>
                      <li><span>Guarantee : </span>{data.guarantee}</li>
                      <li><span>Price : </span>{data.price}</li>
                    </ul>
                    <Link key={data._id} to={`/details/${data._id}`}>
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

export default Pro;
