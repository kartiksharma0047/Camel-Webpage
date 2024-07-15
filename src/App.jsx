import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faSquareXTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faLocationDot, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import {
  LogoHero, GraphicDesiginingIcon, DigitalMarketingIcon, WebsiteDevelopmentIcon, UiUxIcon, SEOIcon, PPTDesigningIcon, LogoDark, SyncTattooIcon, BriskIcon, GhunghatIcon, MuffTattooIcon, MSCIcon, LogoIconPNG, KoruIcon, TmrIcon, HouseOfTattooIcon, SkinBuzzIcon, SoftLensIcon, LogoIcon2PNG, NishaIcon, EternoIcon, FastDeliveryIcon, AffordablePriceIcon, BestQualityIcon, CustomDesignIcon, LogoHeroWhite
} from './IconImport';

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Form Submitted Successfully!</h2>
        <p>Thank you for submitting the form. We will get back to you soon.</p>
        <FontAwesomeIcon onClick={onClose} icon={faXmark} />
      </div>
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    const errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = 'Please enter a value';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Please enter alphabetical letters only';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Please enter a value';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email doesn't exist";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      errors.phone = 'Please enter a value';
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = 'Please enter numbers only';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPopupVisible(true);

      // Reset form
      setFormData({ name: '', email: '', phone: '' });
      setErrors({ name: '', email: '', phone: '' });
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleHamburgerClick = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <div className="Header">
        <img src={LogoHero} alt="Logo" />
        <ul className='NotHamburgerIcon'>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Contact Us</button></li>
          <li><button>Clients</button></li>
          <li><button>Why Us</button></li>
          <li><button>Contact Us</button></li>
        </ul>
        <div className='HamburgerIcon'>
          <FontAwesomeIcon icon={faBars} onClick={handleHamburgerClick} />
          {isHamburgerOpen && (
            <div className="HamburgerMenu">
              <FontAwesomeIcon icon={faXmark} onClick={handleHamburgerClick} />
              <ul>
                <li><button>Home</button></li>
                <li><button>About Us</button></li>
                <li><button>Contact Us</button></li>
                <li><button>Clients</button></li>
                <li><button>Why Us</button></li>
                <li><button>Contact Us</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='HeroSectionPC'>
        <div className='HeroSectionPCLeft'>
          <h2>Boost your Business with our</h2>
          <h1>Premium services!</h1>
        </div>
        <div className='HeroSectionPCRight'>
          <img src={LogoHero} alt="Camel logo for PC" />
        </div>
      </div>
      <div className='WhosCamelDigital'>
        <h1>Camel Digital, Who we are</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h2>
      </div>
      <div className='OurServices'>
        <div className='Frame1'>
          <h1>Premium Services like no other</h1>
          <h2>We have highly skilles people that will be utilizing their knowledge for generating the best outcome for your business therefore touching a new level of ROI. Our services are super affordable.</h2>
        </div>
        <div className='ServicesDivDesktop'>
          <div>
            <img src={GraphicDesiginingIcon} alt="img" />
            <h1>Graphic Designing</h1>
          </div>
          <div>
            <img src={DigitalMarketingIcon} alt="img" />
            <h1>Digital Marketing</h1>
          </div>
          <div>
            <img src={WebsiteDevelopmentIcon} alt="img" />
            <h1>Website Development</h1>
          </div>
          <div>
            <img src={UiUxIcon} alt="img" />
            <h1>UI/UX</h1>
          </div>
          <div>
            <img src={SEOIcon} alt="img" />
            <h1>SEO</h1>
          </div>
          <div>
            <img src={PPTDesigningIcon} alt="img" />
            <h1>PPT Designing</h1>
          </div>
        </div>
      </div>
      <div className='OurClients'>
        <h1 className='OurClientsText'>Our Clients</h1>
        <img src={LogoDark} alt="img" className='LogoDark' />
        <div className='MediaScroll'>
          <img src={SyncTattooIcon} alt="img" />
          <img src={BriskIcon} alt="img" />
          <img src={GhunghatIcon} alt="img" />
          <img src={MuffTattooIcon} alt="img" />
          <img src={MSCIcon} alt="img" />
          <img src={LogoIconPNG} alt="img" />
          <img src={KoruIcon} alt="img" />
          <img src={TmrIcon} alt="img" />
          <img src={HouseOfTattooIcon} alt="img" />
          <img src={SkinBuzzIcon} alt="img" />
          <img src={SoftLensIcon} alt="img" />
          <img src={LogoIcon2PNG} alt="img" />
          <img src={NishaIcon} alt="img" />
          <img src={EternoIcon} alt="img" />
        </div>
      </div>
      <div className='WhyChooseUs'>
        <h1>Why we differ</h1>
        <div className='Qualities'>
          <div>
            <img src={FastDeliveryIcon} alt="" />
            <h2>Fast Delivery</h2>
          </div>
          <div>
            <img src={AffordablePriceIcon} alt="" />
            <h2>Affordable Price</h2>
          </div>
        </div>
        <div className='Qualities'>
          <div>
            <img src={BestQualityIcon} alt="" />
            <h2>Best Quality</h2>
          </div>
          <div>
            <img src={CustomDesignIcon} alt="" />
            <h2>Custom Design</h2>
          </div>
        </div>
      </div>
      <div className='BookACall'>
        <h1>Lets talk Business, shall we</h1>
        <div className='Frame3'>
          <div className='Frame5'>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className='Frame4'>
            <hr />
            <p>OR</p>
          </div>
          <div className='Frame6'>
            <button>Book a Call</button>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <div className='Footer1'>
          <h1>Need help in your digital journey?</h1>
          <h2>CAMEL DIGITAL</h2>
        </div>
        <div className='Footer2'>
          <img src={LogoHeroWhite} alt="img" />
          <div>
            <h1>Socials</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faSquareInstagram} />Instagram
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />Linkedin
              </li>
              <li>
                <FontAwesomeIcon icon={faSquareXTwitter} />X
              </li>
            </ul>
          </div>
          <div>
            <h1>Reach Us</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} />6350526267
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />camel.digital.in@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />Jaipur
              </li>
            </ul>
          </div>
          <div className='FooterCompany'>
            <h1>Company</h1>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Clients</li>
              <li>Why Us</li>
            </ul>
          </div>
        </div>
        <div className='Footer3'>
          <h1>© 2024 Camel Digital</h1>
        </div>
      </div>
      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </>
  );
}

export default App;
