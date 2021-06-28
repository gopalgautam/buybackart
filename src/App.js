import { Link, useState } from "react";
import './App.scss';
import logo from './assets/img/buybackart_logo.png';
import offer from './assets/img/offer.png';

// banner images
import banner from './assets/img/buybackart_banner.jpg';
import banner1 from './assets/img/buybackart_banner01.jpg';
import banner2 from './assets/img/buybackart_banner03.jpg';

// explore images
import sellPhone from "./assets/img/cell_phone.png";
import repairPhone from "./assets/img/cell_repair.png";
import sellIpad from "./assets/img/ipad.png";
import sellTablet from "./assets/img/tablets.png";
import sellMacbook from "./assets/img/mac_book.png";
import sellLaptop from "./assets/img/laptop.png";
import sellImac from "./assets/img/sell_mac.png"

// selling simpler images
import evaluatePrice from "./assets/img/1.png";
import schedulePickup from "./assets/img/2.png";
import instantPayment from "./assets/img/3.png";

// why-buybackart images
import allInOne from "./assets/img/rings.png";
import expertGadget from "./assets/img/wcu_2.png";
import certifiedProducts from "./assets/img/wcu_3.png"
import assuredSafety from "./assets/img/wcu_4.png";
import fastServices from "./assets/img/quick.png";
import awesomePrice from "./assets/img/price.png";

// fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faMapMarker, faSearch } from '@fortawesome/free-solid-svg-icons';

// carousel images
import carouselbg2 from "./assets/img/bg_2.jpg";
import iphone11Red from "./assets/img/iphone11-red.png";
import iphone11Pro1 from "./assets/img/iphone11pro_1.jpeg";
import iphone11ProMax from "./assets/img/iphone11promax.png";
import iphoneXR_1 from "./assets/img/iphoneXR_1.png";
import iphoneXS from "./assets/img/iphoneXS.png";
import iphoneX from "./assets/img/iphoneX.png";

// partner image
import croma from "./assets/img/Croma_Logo.png";
import imagine from "./assets/img/imagine.png";
import multiplier from "./assets/img/multiplier.png";

// testimonial image
import shivamGarg from "./assets/img/ShivamGarg.png";
import rahul from "./assets/img/rahul.png";
import user from "./assets/img/user.png";
import harishSingh from "./assets/img/HarishSingh.png";
import gauravJha from "./assets/img/gaurav_jha.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const singleItem = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <header>
        <div class="container-fluid">
          <div class="d-sm-flex py-2 px-lg-5">
            <div class="my-auto">
              <a href="https://buybackart.com/">
                <img src={logo} class="img-fluid" alt="logo" width="120" />
              </a>
            </div>
            <div class="px-5 w-100">
              <div class="input-group searchbar">
                <label class="input-group-text" for="inputGroupFile01">
                  <FontAwesomeIcon alt="Linkedin" title="Youtube" icon={faSearch} />
                </label>
                <input type="text" class="form-control" placeholder="Start typing..." />
              </div>
            </div>
            <div class="my-auto">
              <ul class="justify-content-end d-flex align-items-center mb-0 top_links">
                <li class="align-items-center d-flex pe-5">
                  <FontAwesomeIcon alt="Twitter" title="Twitter" icon={faMapMarker} />
                  <a href="https://buybackart.com/login_other" class="text-black">Delhi</a>
                </li>
                <li class="align-items-center d-flex pl-5">
                  <FontAwesomeIcon alt="Twitter" title="Twitter" icon={faUser} />
                  <a href="https://buybackart.com/login_other" class="text-black">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="border-top m-0" />
        <div class="container-fluid">
          <div class="row px-lg-5">
            <nav class="navbar navbar-expand-sm main_navbar">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                  <i class="fa fa-bars text-dark" aria-hidden="true"></i></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-list">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <div class="dropdown">
                      <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Sell</a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="nav-link dropdown-item" href="sell_phone">Phone </a>
                        <a class="nav-link dropdown-item" href="sell_apple_ipad">iPad</a>
                        <a class="nav-link dropdown-item" href="sell_tablet">Tablet</a>
                        <a class="nav-link dropdown-item" href="sell_apple_macbook">MacBook</a>
                        <a class="nav-link dropdown-item" href="sell_apple_imac">iMac</a>
                        <a class="nav-link dropdown-item" href="sell_laptop">Laptop</a>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="repair">Repair Phone</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize"
                      href="https://www.store.buybackart.com/index.php?route=product/category&amp;path=99" target="_blank">Buy
                      Refurbish Phone</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize"
                      href="https://www.store.buybackart.com/index.php?route=product/category&amp;path=64" target="_blank">Buy
                      Accessories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize"
                      href="https://www.store.buybackart.com/index.php?route=product/category&amp;path=24" target="_blank">Buy
                      New Smartphones</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="https://buybackart.com/offers">
                      <img src={offer} class="img-fluid" alt="offer" width="21" height="21" /> Offers
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* banner */}
      <Carousel
        responsive={singleItem}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        containerClass="offer__carousel"
      >
        <img src={banner} class="img-fluid" />
        <img src={banner1} class="img-fluid" />
        <img src={banner2} class="img-fluid" />
      </Carousel>
      {/* explore here */}
      <section class="container py-3 explore d-flex flex-column">
        <div class="row d-flex justify-content-center">
          <h2 class="main_heading">Explore Here</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_phone">
              <img src={sellPhone} alt="sell-phone" class="img-fluid" />
              <span>Sell phone</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/repair">
              <img src={repairPhone} alt="repair-phone" class="img-fluid" />
              <span>Repair phone</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_apple_ipad">
              <img src={sellIpad} alt="sell-ipad" class="img-fluid" />
              <span>Sell ipad</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_tablet">
              <img src={sellTablet} alt="sell-tablets" class="img-fluid" />
              <span>Sell tablet</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_apple_macbook">
              <img src={sellMacbook} alt="sell-macbook" class="img-fluid" />
              <span>Sell macbook</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_laptop">
              <img src={sellLaptop} alt="sell-laptop" class="img-fluid" />
              <span>Sell laptop</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_phone">
              <img src={sellPhone} alt="sell-phone" class="img-fluid" />
              <span>Sell phone</span>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-6 img-fluid d-flex justify-content-center explore__box">
            <a href="https://buybackart.com/sell_apple_imac">
              <img src={sellImac} alt="sell-imac" />
              <span>Sell imac</span>
            </a>
          </div>
        </div>
      </section>
      {/* selling made simpler */}
      <section class="container-fluid my-5">
        <div class="row px-lg-5">
          <h2 class="main_heading">Selling made simpler</h2>
        </div>
        <div class="row px-lg-5">
          <div class="col-md-4 col-12 selling-simpler-box">
            <img src={evaluatePrice} class="img-fluid mb-3" width="300" height="300" />
            <div class="d-flex flex-column justify-content-center selling-simpler-box__content">
              <h5 class="text-capitalize"><a href="#" class="hvr-pulse">Evaluate price</a></h5>
              <p class="text-muted">Choose your device and tell us about its present condition and our advanced AI
                technology will find the correct price for you </p>
            </div>
          </div>
          <div class="col-md-4 col-12 selling-simpler-box">
            <img src={schedulePickup} class="img-fluid mb-3" width="300" height="300" />
            <div class="d-flex flex-column justify-content-center selling-simpler-box__content">
              <h5 class="text-capitalize"><a href="#" class="hvr-pulse">Schedule Pickup </a></h5>
              <p class="text-muted">Book free pickup on a slot that matches convenience at home or work place </p>
            </div>
          </div>
          <div class="col-md-4 col-12 selling-simpler-box">
            <img src={instantPayment} class="img-fluid mb-3" width="300" height="300" />
            <div class="d-flex flex-column justify-content-center selling-simpler-box__content">
              <h5 class="text-capitalize"><a href="#" class="hvr-pulse">Instant payment</a></h5>
              <p class="text-muted">Have we stated that once our executive picks up your device you Get paid? Payment is immediate all the way!</p>
            </div>
          </div>
        </div>
      </section>
      {/* why buybackart */}
      <section class="why-buybackart">
        <section class="container-fluid my-3">
          <div class="row px-lg-5">
            <h2 class="main_heading">Why Buybackart</h2>
          </div>
          <div class="row px-lg-5">
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={allInOne} alt="All In One" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column">
                  <h5 class="text-capitalize">All in one</h5>
                  <p class="text-muted">Sell, exchange, buy or service of your products</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={expertGadget} alt="Expert Of Gadget" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column justify-content-center">
                  <h5 class="text-capitalize">Expert Of Gadget</h5>
                  <p class="text-muted">we trained professional to guide you and solve your device problem in fastest way
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={certifiedProducts} alt="Certified Products" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column justify-content-center">
                  <h5 class="text-capitalize">Certified Products</h5>
                  <p class="text-muted">All products are certified, quality assurance on delivery</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={assuredSafety} alt="Assured Safety" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column justify-content-center">
                  <h5 class="text-capitalize">Assured Safety</h5>
                  <p class="text-muted">At the time of buyback and service, we take of your personal data with safest hand
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={fastServices} alt="Quick and Fast Service" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column justify-content-center">
                  <h5 class="text-capitalize">Quick and Fast Service</h5>
                  <p class="text-muted">Get your mobile repair within 24hrs and deliver at your doorstep</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 why-buybackart__features">
              <div class="d-md-flex py-3">
                <div class="mb-2 mb-md-0">
                  <img src={awesomePrice} alt="Awesome Price" class="me-md-2" />
                </div>
                <div class="ml-3 d-flex flex-column justify-content-center">
                  <h5 class="text-capitalize">Awesome Price</h5>
                  <p class="text-muted">Now buy at a price you wish</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* exciting offers */}
      <section class="container-fluid my-5" id="Exciting_offers">
        <div class="row px-lg-5">
          <h2 class="main_heading">Exciting offers</h2>
        </div>
        <div class="row px-lg-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            containerClass="offer__carousel"
          >

            <div class="border shadow mx-3 offer__item" style={{ backgroundImage: "url(" + carouselbg2 + ")" }}>
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphone11Red} alt="iphone 11 Red" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone 11</h3>
                  <p>Get Upto INR 37500
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 40500
                    <span>For 128 GB</span>
                  </p>
                  <p>Get Upto INR 43000
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=61" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>
            <div class="border shadow mx-3 offer__item">
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphone11Pro1} alt="iphone 11 pro" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone 11 PRO</h3>
                  <p>Get Upto INR 56000
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 63000
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=42" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>
            <div class="border shadow mx-3 offer__item" style={{ backgroundImage: "url(" + carouselbg2 + ")" }}>
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphone11ProMax} alt="iphone 11 pro max" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone 11 PRO MAX</h3>
                  <p>Get Upto INR 62000
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 63500
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=56" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>
            <div class="border shadow mx-3 offer__item">
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphoneXR_1} alt="iphone XR" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone XR</h3>
                  <p>Get Upto INR 30000
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 37000
                    <span>For 128 GB</span>
                  </p>
                  <p>Get Upto INR 40000
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=57" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>
            <div class="border shadow mx-3 offer__item" style={{ backgroundImage: "url(" + carouselbg2 + ")" }}>
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphoneXS} alt="iphone XS" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone XS</h3>
                  <p>Get Upto INR 38000
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 42000
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=52" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>
            <div class="border shadow mx-3 offer__item">
              <div class="row p-3">
                <div class="col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-center">
                  <img src={iphoneX} alt="iphone X" class="img-fluid" />
                </div>
                <div class="col-lg-7 col-md-7 col-7 offer__detail">
                  <h3>iPhone X</h3>
                  <p>Get Upto INR 34000
                    <span>For 64 GB</span>
                  </p>
                  <p>Get Upto INR 38000
                    <span>For 256 GB</span>
                  </p>
                  <a href="http://buybackart.com/choose_variant?id=51" class="btn btn-sm">Sell Now</a>
                </div>
              </div>
            </div>

          </Carousel>
        </div>
      </section>
      {/* our partners */}
      <section class="container-fluid py-5" style={{ background: '#fafafa' }}>
        <div class="row px-lg-5">
          <h2 class="main_heading mb-4">Our Partners</h2>
        </div>
        <div class="row px-lg-5">
          <ul class="our-partner">
            <li><img src={croma} alt="Croma logo" class="card-img" /></li>
            <li>
              <a href="https://buybackart.com/phone_one_brand?id=14">
                <img src={imagine} alt="Imagine logo" class="card-img" />
              </a>
            </li>
            <li><img src={multiplier} alt="Multiplier" class="card-img" /></li>
            <li><img src={croma} alt="Croma logo" class="card-img" /></li>
            <li>
              <a href="https://buybackart.com/phone_one_brand?id=14">
                <img src={imagine} alt="Imagine logo" class="card-img" />
              </a>
            </li>
            <li><img src={multiplier} alt="Multiplier" class="card-img" /></li>
            <li>
              <a href="https://buybackart.com/phone_one_brand?id=14">
                <img src={imagine} alt="Imagine logo" class="card-img" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="testimonial-box">
        <div class="container-fluid my-4">
          <div class="row px-lg-5">
            <h2 class="main_heading">What our customers &amp; partners say</h2>
          </div>
          <div class="row px-lg-5">
            <Carousel
              responsive={singleItem}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              containerClass="offer__carousel"
            >
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={shivamGarg} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Shivam Garg <br /> Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    Very good service provided by BuyBacKart for my Samsung M30s (6GB +128 GB) , while many websites
                    are only saying the pickup from our location but they are actually not fulfilling, But Mr Aftab
                    Ansari from BuyBacKart has given me a far better deal in comparison to others and also ensured
                    pick up from my address. Mr Shadab Ansari and Md Tamanna Alam visited my address to collect the
                    phone and travelled for nearly 2 hours, they checked the phone genuinely and provided me the best
                    price. I suggest to mention order status on website and transactions through bank account or upi
                    is more preferable than cash.<br />Thankyou BuyBacKart for such a wonderful experience of selling my
                    mobile online from home.
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide d-flex align-items-center">
                  <img src={rahul} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Rahul <br /> Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    BuyBacKart is a fantastic and one-of-a-kind service. It has helped me to sell my old used phone in
                    a hassle free manner. The service is very convenient, with doorstep collection of phone, and
                    immediate cash payment. The rates offered also are very competitive, given the used condition of
                    the phone.
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={user} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Niteshkumar yadav <br /> Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    Got a good experience polite staff and way of dealing was good, but didn't get the exact amount
                    which was showing.<br />Overall was a good experience.
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={harishSingh} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">HARISH SINGH <br />Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    I had a great experience selling my iPhone on buybackart, got very fast service and best price
                    comparison other sites thanx buybackart ...
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={user} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Kopal Jain <br />Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    Good experience..service wasn't available at my place still they sent their executive and picked
                    my stuff..highly recommended.
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={user} alt="user" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Kannu S Mallik <br />Customer</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    I had an amazing experience recently with BuyBacKart. I ordered an iphone charger and they were
                    very prompt &amp; responsive. Professional staff, affordable price, and overall good service. I
                    will definitely recommend BuyBacKart to friends and around.
                  </blockquote>
                </div>
              </div>
              <div class="d-md-flex align-center">
                <div class="testimonial__slide">
                  <img src={gauravJha} alt="user_icon" class="rounded-circle shadow-sm" />
                  <h6 class="text-capitalize text-center">Gaurav Jha <br />Multiplier</h6>
                </div>
                <div class="testimonial__text">
                  <blockquote class="card-text">
                    We developed a great partnership with BuyBacKart and their dedication towards their assigned job
                    is awesome in all aspects. We appreciate their attention towards their task &amp; job done by them
                    in short notice. BuyBacKart provides all type of solutions towards procuring new devices, buyback
                    &amp; Accessories provider.
                  </blockquote>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <footer class="container-fluid">
        <div class="row px-lg-5 footer-sec">
          <div class="footer-sec__list">
            <h6>Services</h6>
            <p><a href="https://buybackart.com/sell_phone">Sell Phone</a></p>
            <p><a href="https://buybackart.com/sell_apple_ipad">Sell iPad</a></p>
            <p><a href="https://buybackart.com/sell_laptop">Sell Laptop</a></p>
            <p><a href="https://buybackart.com/sell_apple_macbook">Sell Macbook</a></p>
            <p><a href="https://buybackart.com/sell_apple_imac">Sell iMac</a></p>
            <p><a href="https://buybackart.com/sell_tablet">Sell Tablet</a></p>
          </div>
          <div class="footer-sec__list">
            <h6>More Info</h6>
            <p><a href="https://buybackart.com/about">About Us</a></p>
            <p><a href="https://buybackart.com/contact">Contact Us</a></p>
            <p><a href="https://buybackart.com/refund">Refund &amp; Cancellation</a></p>
            <p><a href="https://buybackart.com/privacy_policy">Privacy Policy</a></p>
            <p><a href="https://buybackart.com/Terms_conditions">Terms &amp; Conditions</a></p>
          </div>
          <div class="footer-sec__list">
            <h6>Contact Us</h6>
            <p>Enquiry: <a href="mailto:info@buybackart.com" class="enquiry_link">info@buybackart.com</a></p>
            <p>Support: <a href="mailto:support@buybackart.com" class="enquiry_link">support@buybackart.com</a></p>
            <p>Call Us At +91 9310353308</p>

            <h6 class="mt-4 mb-0">Newsletter</h6>
            <p>Don't miss any updates or promotions <br />by signing up to our newsletter.</p>
            <form action="https://buybackart.com/Newsletter/insert_newsletter" id="newsletter_form" method="post">
              <input type="text" name="email_id" required class="newsletter_input" />
              <button type="submit" class="submit">Send</button><br />
              <div class="d-flex align-items-center">
                <input type="checkbox" value="terms" name="terms" id="newsletter_check" />
                <label class="ms-2">I have read and agree to the</label>
              </div>
            </form>
          </div>
          <div class="footer-sec__social ms-auto flex-column justify-content-start">
            <h6>Follow Us</h6>
            <div class="d-flex">
              <a href="https://www.facebook.com/buybacknow" target="_blank">
                <FontAwesomeIcon alt="Twitter" title="Twitter" icon={faTwitter} />
              </a>
              <a href="https://twitter.com/buybacknow" target="_blank">
                <FontAwesomeIcon alt="Facebook" title="Facebook" icon={faFacebookF} />
              </a>
              <a href="https://www.youtube.com/channel/UCHkKUA0iSKjqDhq9hr8AlCw" target="_blank">
                <FontAwesomeIcon alt="Instagram" title="Instagram" icon={faInstagram} />
              </a>
              <a href="https://www.instagram.com/buybacknow/" target="_blank">
                <FontAwesomeIcon alt="Linkedin" title="Youtube" icon={faYoutube} />
              </a>
            </div>
            <a href="#" class="chatwithus-btn">Chat with us</a>
          </div>
        </div>
        <hr class="row mt-5" />
        <div class="row px-lg-5">
          <p>Copyright © 2020 Buybackart.com, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
