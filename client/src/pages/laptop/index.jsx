import React, { useEffect, useState } from "react";
import categoryImg1 from "../../images/laptopcatimg1.png";
import categoryImg2 from "../../images/laptopcatimg2.png";
import categoryImg3 from "../../images/laptopcatimg3.png";
import categoryImg4 from "../../images/laptopcatimg4.png";
import categoryImg5 from "../../images/laptopcatimg5.png";
import img1 from "../../images/proart1.png";
import { Link } from "react-router-dom";
import "./laptop.scss";
import axios from "axios";
const Laptop = () => {
  const [laptops, SetLaptops] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/laptops/get")
      .then((res) => SetLaptops(res.data));
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
              <Link to=''>
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
        <div className='laptops'>
          <div className='laptops__pro'>
            <h1>ProArt Studiobook</h1>
            <p>
              ProArt Studiobook is the best laptop for professional creators,
              with ultimate performance, professional-grade graphics and a
              color-accurate wide-gamut display
            </p>
            <div>
              <div className='laptops__pro__cards'>
                {laptops &&
                  laptops
                    .filter((item) => item.name.includes("ProArt"))
                    .map((data) => (
                      <div className='laptops__pro__cards__card'>
                        <h1>ProArt Studiobook PRO</h1>
                        <img src={img1} alt='' />
                        <p>
                          The best laptop for creative users, it's stylish with
                          state-of-the art components, the best processors and
                          fast graphics to express your creativity anywhere.
                        </p>
                        <Link to='/proart'>
                          <button>See All</button>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className='laptops__pro'>
            <h1>ZeenBook</h1>
            <p>
              Zenbook is compact, thin and light, with the best innovative
              laptop technology, NanoEdge displays, precision craftsmanship, and
              uncompromising performance.
            </p>
            <div>
              <div className='laptops__pro__cards'>
                {laptops &&
                  laptops
                    .filter((item) => item.name.includes("Zenbook"))
                    .map((data) => (
                      <div className='laptops__pro__cards__card'>
                        <h1>{data.name}</h1>
                        <img src={data.image} alt='' />
                        <p>{data.title}</p>
                        <Link to='/zenbook'>
                          <button>See All</button>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className='laptops__pro'>
            <h1>Vivobook</h1>
            <p>
              The colorful, bold and youthful Vivobook series shows who you
              really are. These fast laptops make tasks easier, with innovative
              and thoughtful design.
            </p>
            <div>
              <div className='laptops__pro__cards'>
                {laptops &&
                  laptops
                    .filter((item) => item.name.includes("Vivobook"))
                    .map((data) => (
                      <div className='laptops__pro__cards__card'>
                        <h1>{data.name}</h1>
                        <img src={data.image} alt='' />
                        <p>{data.title}</p>
                        <Link to='/vivobook'>
                          <button>See All</button>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className='laptops__pro'>
            <h1>Chromebook</h1>
            <p>
              Running on Chrome OS, ASUS Chromebooks are fast and streamlined
              with all-day battery life, built-in security and automatic updates
              from Google.
            </p>
            <div>
              <div className='laptops__pro__cards'>
                {laptops &&
                  laptops
                    .filter((item) => item.name.includes("Chromebook"))
                    .map((data) => (
                      <div className='laptops__pro__cards__card'>
                        <h1>{data.name}</h1>
                        <img src={data.image} alt='' />
                        <p>{data.title}</p>
                        <Link to='/chromebook'>
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
    </div>
  );
};

export default Laptop;
