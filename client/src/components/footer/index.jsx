import React from "react";
import "./footer.scss";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='foot'>
      <div className='footer'>
        <Link to='https://www.instagram.com/asus/'>
          <i class='fa-brands fa-instagram'></i>
        </Link>
        <Link to='https://www.facebook.com/asuskz/?brand_redir=179161458793927'>
          <i class='fa-brands fa-facebook-f'></i>
        </Link>
        <Link to='https://twitter.com/ASUS'>
          <i class='fa-brands fa-twitter'></i>
        </Link>
        <Link to='https://www.linkedin.com/company/asus/'>
          <i class='fa-brands fa-linkedin-in'></i>
        </Link>
        <Link to='https://www.pinterest.com/asushq/'>
          <i class='fa-brands fa-pinterest-p'></i>
        </Link>
        <Link to='https://www.youtube.com/user/asus'>
          <i class='fa-brands fa-youtube'></i>
        </Link>
      </div>
      <div className='footer__bottom'>
        <p>©ASUSTeK Computer Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
