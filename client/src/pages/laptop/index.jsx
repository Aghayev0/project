import React from "react";
import categoryImg1 from "../../images/laptopcatimg1.png";
import categoryImg2 from "../../images/laptopcatimg2.png";
import categoryImg3 from "../../images/laptopcatimg3.png";
import categoryImg4 from "../../images/laptopcatimg4.png";
import categoryImg5 from "../../images/laptopcatimg5.png";
import img1 from "../../images/proart1.png";
import img2 from "../../images/proart11.png";
import img3 from "../../images/proart12.png";
import img4 from "../../images/zenbook1.png";
import img5 from "../../images/zenbook2.png";
import img6 from "../../images/zenbook3.png";
import img7 from "../../images/vivobook1.png";
import img8 from "../../images/vivobook2.png";
import img9 from "../../images/vivobook3.png";
import img10 from "../../images/chromebook1.png";
import img11 from "../../images/chromebook2.png";
import img12 from "../../images/chromebook3.png";
import "./laptop.scss";
const Laptop = () => {
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
              <img alt='' src={categoryImg1} />
              <p>All Series</p>
            </div>
            <div>
              <img alt='' src={categoryImg2} />
              <p>ProArt StudioBook</p>
            </div>
            <div>
              <img alt='' src={categoryImg3} />
              <p>ZenBook</p>
            </div>
            <div>
              <img alt='' src={categoryImg4} />
              <p>Vivobook</p>
            </div>
            <div>
              <img alt='' src={categoryImg5} />
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
                <div className='laptops__pro__cards__card'>
                  <h1>ProArt Studiobook PRO</h1>
                  <img src={img1} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>ProArt Studiobook S</h1>
                  <img src={img2} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>ProArt Studiobook</h1>
                  <img src={img3} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
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
                <div className='laptops__pro__cards__card'>
                  <h1>Zenbook</h1>
                  <img src={img4} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>Zenbook PRO</h1>
                  <img src={img5} alt='' />
                  <p>
                    Elegant, trendy, thin and light, it's the best laptop for
                    on-the-go work and entertainment.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>Zenbook FLIP</h1>
                  <img src={img6} alt='' />
                  <p>
                    The best and most versatile 2-in-1 convertible, featuring a
                    360°-flippable display and stylus support that let you sail
                    through any task with style and ease.
                  </p>
                  <button>See All</button>
                </div>
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
                <div className='laptops__pro__cards__card'>
                  <h1>Vivobook S</h1>
                  <img src={img7} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>Vivobook FLIP</h1>
                  <img src={img8} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>Vivobook SLIM</h1>
                  <img src={img9} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
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
                <div className='laptops__pro__cards__card'>
                  <h1>Chromebook FLIP</h1>
                  <img src={img10} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>Chromeboo Detachable</h1>
                  <img src={img11} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
                <div className='laptops__pro__cards__card'>
                  <h1>ChromeBook VIBE</h1>
                  <img src={img12} alt='' />
                  <p>
                    The best laptop for creative users, it's stylish with
                    state-of-the art components, the best processors and fast
                    graphics to express your creativity anywhere.
                  </p>
                  <button>See All</button>
                </div>
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
