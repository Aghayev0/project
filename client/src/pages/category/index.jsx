import React from "react";
import "./category.scss";
import categoryImg1 from "../../images/img1.webp";
import categoryImg2 from "../../images/img2.webp";
import categoryImg3 from "../../images/img3.webp";
const Category = () => {
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
            <img alt='' src={categoryImg1} />
            <p>All Series</p>
          </div>
          <div>
            <img alt='' src={categoryImg2} />
            <p>Zenfone</p>
          </div>
          <div>
            <img alt='' src={categoryImg3} />
            <p>ROG Phone</p>
          </div>
        </div>
      </div>
      <div className='categories'>
        <div className='categories__left'>
          <h5>By Brands</h5>
          <div>
            <input type='checkbox' />
            <p>Zenfone</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>ROG Phone</p>
          </div>
          <h5>CPU</h5>
          <div>
            <input type='checkbox' />
            <p>MediaTek Dimensity 9000+</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Qualcomm Snapdragon 8+ Gen 1</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Qualcomm Snapdragon 888 Plus</p>
          </div>
        </div>
        <div className='categories__right'></div>
      </div>
    </div>
  );
};

export default Category;
