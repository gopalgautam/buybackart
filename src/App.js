import { Link } from "react"
import './App.scss';
import logo from './assets/img/buybackart_logo.png';
import offer from './assets/img/offer.png'
import banner from './assets/img/buybackart_banner.jpg'

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

import socialIcon from "./assets/img/social-icon.jpg";
import excitinOffer from "./assets/img/exciting-offer.jpg";
import partner from "./assets/img/partner.png";
import testimonial from "./assets/img/testimonial.jpg";

// fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <>
      <header>
        <div class="container-fluid">
          <div class="row py-2 px-lg-5">
            <div class="col-md-3 col-5 my-auto">
              <a href="https://buybackart.com/">
                <img src={logo} class="img-fluid" alt="logo" width="120" />
              </a>
            </div>
            <div class="col-md-9 col-7 my-auto">
              <ul class="justify-content-end d-flex align-items-center mb-0">
                <li class="align-items-center d-flex px-5">
                  <i class="fa fa-map-marker fa-1x pr-2" aria-hidden="true"></i>
                  <a href="https://buybackart.com/login_other" class="text-black">Delhi</a>
                </li>
                <li class="align-items-center d-flex pl-5">
                  <i class="fa fa-user fa-1x pr-2" aria-hidden="true"></i>
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
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                  <i class="fa fa-bars text-dark" aria-hidden="true"></i></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-list-2">
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
      <section>
        <img src={banner} class="img-fluid" />
      </section>
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
      <section class="container-fluid my-5" id="Exciting_offers">
        <div class="row px-lg-5">
          <h2 class="main_heading">Exciting offers</h2>
        </div>
        <div class="row px-lg-5">
          <img src={excitinOffer} alt="Exciting Offer" />
          {/* <div id="offers_carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#offers_carousel" data-slide-to="0" class="bg-dark active"></li>
              <li data-target="#offers_carousel" data-slide-to="1" class="bg-dark"></li>
            </ol>
            <div class="carousel-inner py-3">
              <div class="carousel-item active">
                <div class="d-flex">
                  <div class="card shadow-sm mr-4" style={{ backgroundImage: "url('assets/img/bg_2.jpg')" }}>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone11-red.png" alt="" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">
                            <strong>Sell Your iPhone 11</strong>
                          </button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 37500</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 40500</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 128 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 43000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=61" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card shadow-sm mr-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone 11 pro_1.jpeg" alt="iphone 11 pro_1.jpeg" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">Sell Your iPhone 11 PRO</button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 56000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 63000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=42" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card shadow-sm mr-4" style={{ backgroundImage: "url('assets/img/bg_2.jpg')" }}>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone 11 pro max.png" alt="iphone 11 pro max.png" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">
                            <strong>Sell Your iPhone 11 PRO MAX</strong>
                          </button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 62000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 63500</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=56" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex">
                  <div class="card shadow-sm mr-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone XR_1.png" alt="" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">Sell Your iPhone XR</button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 30000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 37000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 128 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 40000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 mr-auto">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=57" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card shadow-sm mr-4" style={{ backgroundImage: "url('assets/img/bg_2.jpg')" }}>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone XS.png" alt="iphone XS.png" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">Sell Your iPhone XS</button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 38000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 42000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=52" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card shadow-sm mr-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                          <div class="row">
                            <div class="col-10">
                              <img src="assets/img/buybackart_logo.png" class="card-img ml-2" alt="buybackart_logo" />
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="card-img col-12">
                              <img src="assets/img/iphone X.png" alt="iphone X.png" class="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-8">
                          <button class="btn btn-block btn-default text-uppercase">Sell Your iPhone X</button>
                          <div class="row">
                            <div class="col-md-12 col-12">
                              <p class="text-center mt-3">Get Upto INR 34000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6">
                                  <p>For 64 GB</p>
                                </div>
                              </div>
                              <p class="text-center">Get Upto INR 38000</p>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-6">
                                  <p>For 256 GB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="row justify-content-end">
                            <div class="col-lg-7 col-md-7 col-7">
                              <a href="http://buybackart.com/choose_variant?id=51" class="btn btn-sm">Sell Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#offers_carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#offers_carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
      <section class="container-fluid py-5" style={{ background: '#fafafa' }}>
        <div class="row px-lg-5">
          <h2 class="main_heading mb-2">Our Partners</h2>
        </div>
        <div class="row px-lg-5">
          <img src={partner} alt="Our Partner" />
        </div>
      </section>

      <section id="testimonial-box">
        <div class="container-fluid my-4">
          <div class="row px-lg-5">
            <h2 class="main_heading">What our customers &amp; partners say</h2>
          </div>
          <div class="row px-lg-5">
            <img src={testimonial} alt="testimonial" />
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
              <img src={socialIcon} alt="social icon" />
              {/* <FontAwesomeIcon alt="EnerBank Facebook" title="EnerBank Facebook" icon={faFacebookF} /> */}
              {/* <a href="https://www.facebook.com/buybacknow" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/buybacknow" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCHkKUA0iSKjqDhq9hr8AlCw" target="_blank">
                <i class="fa fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/buybacknow/" target="_blank">
                <i class="fa fab fa-instagram"></i>
              </a> */}
            </div>
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
