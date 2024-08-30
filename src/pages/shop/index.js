import Link from "next/link";
import Layout from "@/components/Layout";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Configure Swiper to use Navigation module
SwiperCore.use([Navigation]);

const ShopPage = () => {
    return (
        <Layout>
            <section>
                <div className="categories">
                    <div className="container">
                        <div className="categories-inner">
                            <div
                                className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start align-items-sm-center my-4">
                                <nav className="breadcrumb-nav">
                                    <ol className="breadcrumbOl">
                                        <li className="breadcrumbItem">
                                            <Link href="/">Home</Link>
                                            <span> {'>'} </span>
                                        </li>
                                        <li className="breadcrumbItem">Shop</li>
                                    </ol>
                                </nav>

                                <div className="d-flex align-items-center gap-3 short-by ">
                                    <p className="text">
                                        Short by :
                                    </p>
                                    <div className="box">
                                        <select className="shortBySelect">
                                            <option data-display="Select">Price High to Low</option>
                                            <option value="1">Price Low to High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-5">
                                <div className="d-none d-lg-block col-lg-3">
                                    <div className="categories-left">
                                        <h2 className="categories-title">
                                            Categories
                                        </h2>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Plant for Home
                                                            </p>
                                                        </div>

                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img1.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Oxygen Plants
                                                            </p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img4.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Plant for Office
                                                            </p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img2.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Plant for Outdoor
                                                            </p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">

                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img3.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Water plants
                                                            </p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSix">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">

                                                        <div className="category-header">
                                                            <img className="category-header-img" src="/assets/images/home/category-img4.png"
                                                                alt="category" />
                                                            <p className="category-header-text">
                                                                Oxygen Plants
                                                            </p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <ul className="category-list">
                                                            <li className="category-item">
                                                                -Indoor Trees
                                                            </li>

                                                            <li className="category-item">
                                                                -Outdoor Trees
                                                            </li>
                                                            <li className="category-item">
                                                                -Customized Trees
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="categories-title">
                                            Price
                                        </h2>

                                        <div className="price-range">
                                            <label className="price-range-checkbox">Under $10
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="price-range-checkbox">$10 - $20
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="price-range-checkbox">$20 - $30
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="price-range-checkbox">$30 - $40
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="price-range-checkbox">$40 - $50
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="product-offer position-relative">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1} // You can change this depending on your needs
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev',
                                                }}
                                                className="shopPageSlider"
                                            >
                                                <SwiperSlide>
                                                    <div className="add-product py-4 mx-3">
                                                        <figure className="add-image">
                                                            <img src="/assets/images/home/add-image.png" alt="add" />
                                                        </figure>
                                                        <h1 className="add-title">Up to 50% Off !</h1>
                                                        <a href="./product-details.html" className="primary-button">Shop Now</a>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="add-product py-4 mx-3">
                                                        <figure>
                                                            <img src="/assets/images/home/add-image.png" alt="add" />
                                                        </figure>
                                                        <h1 className="add-title">Up to 50% Off !</h1>
                                                        <button className="primary-button">Shop Now</button>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="add-product py-4 mx-3">
                                                        <figure>
                                                            <img src="/assets/images/home/add-image.png" alt="add" />
                                                        </figure>
                                                        <h1 className="add-title">Up to 50% Off !</h1>
                                                        <button className="primary-button">Shop Now</button>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>

                                            <div className="swiper-buttons">
                                                <div className="swiper-button-next">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                        <path d="M15.7501 17.5L20.75 12.5L15.75 7.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.75 12.5H20.75" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>

                                                <div className="swiper-button-prev">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                        <path d="M9.7499 17.5L4.75 12.5L9.75 7.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M20.75 12.5H4.75" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9">
                                    <div className="row g-4">
                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-5.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Vineyard Reach</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-8.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-6.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-2.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-3.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-1.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-10.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-6.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-3.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-9.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-11.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-10.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-11.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-1.png"
                                                            alt="popularProduct" />
                                                        <div className="new">New</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-sm-6 col-lg-4">
                                            <a href="./product-details.html" className="d-block">
                                                <div className="popularProduct-inner-cart">
                                                    <figure className="popularProduct-inner-cart-image">
                                                        <img className="product-img" src="/assets/images/home/popularProduct-bg-9.png"
                                                            alt="popularProduct" />
                                                        <div className="discount">-50%</div>

                                                        <div className="popularProduct-inner-cart-inner">
                                                            <div className="popularProduct-inner-cart-hover">
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/shopping.png" alt="shopping" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/favourite.png" alt="favourite" />
                                                                </figure>
                                                                <figure className="cart-hover-bg">
                                                                    <img src="/assets/images/home/View.png" alt="View" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </figure>

                                                    <div className="popularProduct-inner-cart-content">
                                                        <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                        <div className="innerPrice">
                                                            <p className="price">$20</p>
                                                            <p className="discountPrice">$25</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pagination-items">
                                <ul className="pagination-body">
                                    <li className="page-item arrow-left">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            2
                                        </a>
                                    </li>

                                    <li className="page-item active">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            ....
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            8
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            9
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            10
                                        </a>
                                    </li>
                                    <li className="page-item arrow-right active">
                                        <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ShopPage;
