import Layout from "@/components/Layout";
import Link from "next/link";

import ReviewSwiper from "@/components/ReviewSwiper";

const HomePage = () => {
    return (
        <Layout>
            <main>
                {/* <!-- Hero section start --> */}
                <section>
                    <div className="hero-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hero-inner-content">
                                        <h1 className="title">
                                            Green up Your Space into nature
                                        </h1>
                                        <p className="details">
                                            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
                                        </p>
                                        <div className="">
                                            <Link href="/shop" className="primary-button">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <figure>
                                        <img src="/assets/images/home/Banner Image.png" alt="Banner" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Hero section end --> */}

                {/* <!-- Category section start --> */}
                <section>
                    <div className="category-inner">
                        <div className="container">
                            <div className="row g-3 g-lg-5">
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Succulents.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Succulents
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Carnivorous.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Carnivorous
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Flowering Plants.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Flowering Plants
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Foliage Plants.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Foliage Plants
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Bonsai Plants.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Bonsai Plants
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <Link href="./product-details.html">
                                        <div className="category-inner-cart">
                                            <figure>
                                                <img className="category-img" src="/assets/images/home/Herbs Plants.png" alt="img" />
                                            </figure>
                                            <p className="category-name">
                                                Herbs Plants
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Category section end --> */}

                {/* <!-- Most Popular Product Start --> */}
                <section>
                    <div className="popularProduct">
                        <div className="container">
                            <div className="popularProduct-inner">
                                <h1 className="popularProduct-inner-header">
                                    Most Popular Product
                                </h1>
                                <div className="popularProduct-inner-category">
                                    <button className="popularProduct-inner-category-btn">
                                        Weeping Fig
                                    </button>
                                    <button className="popularProduct-inner-category-btn">
                                        Rubber Plant
                                    </button>
                                    <button className="popularProduct-inner-category-btn">
                                        Parlor Palm
                                    </button>
                                    <button className="popularProduct-inner-category-btn">
                                        Dragon Tree
                                    </button><button className="popularProduct-inner-category-btn">
                                        Lemon Lime
                                    </button>
                                </div>
                                <div className="row mt-5 g-4">
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
                                            <div className="popularProduct-inner-cart">
                                                <figure className="popularProduct-inner-cart-image">
                                                    <img className="product-img" src="/assets/images/home/popularProduct-bg-3.png"
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
                                            <div className="popularProduct-inner-cart">
                                                <figure className="popularProduct-inner-cart-image">
                                                    <img className="product-img" src="/assets/images/home/popularProduct-bg-4.png"
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
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
                                                    <div className="title line-clamp1">Petlas MultiAction PT565</div>
                                                    <div className="innerPrice">
                                                        <p className="price">$20</p>
                                                        <p className="discountPrice">$25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
                                            <div className="popularProduct-inner-cart">
                                                <figure className="popularProduct-inner-cart-image">
                                                    <img className="product-img" src="/assets/images/home/popularProduct-bg-7.png"
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
                                        </Link>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <Link href="./product-details.html" className="d-block">
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
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Most Popular Product End --> */}

                {/* <!-- Plant for Office START--> */}
                <section>
                    <div className="plantHome">
                        <div className="container">
                            <div className="plantHome-inner">
                                <div className="row g-5">
                                    <div className="col-md-6">
                                        <figure>
                                            <img className="plantHome-inner-imge" src="/assets/images/home/plant-office.png" alt="imge" />
                                        </figure>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="plantHome-inner-content">
                                            <h1 className="plantHome-inner-content-title">
                                                Plant for Office
                                            </h1>
                                            <p className="plantHome-inner-content-details">
                                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                                aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per.
                                            </p>
                                            <div>
                                                <Link href="/shop" className="primary-button">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Plant for Office END--> */}

                {/* <!-- Plant for Your Home START--> */}
                <section>
                    <div className="plantHome">
                        <div className="container">
                            <div className="plantHome-inner">
                                <div className="row g-5">
                                    <div className="col-md-6">
                                        <div className="plantHome-inner-content">
                                            <h1 className="plantHome-inner-content-title">
                                                Plant for Your Home
                                            </h1>
                                            <p className="plantHome-inner-content-details">
                                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                                aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per.
                                            </p>
                                            <div>
                                                <Link href="/shop" className="primary-button">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <figure>
                                            <img className="plantHome-inner-imge" src="/assets/images/home/plant-home.png" alt="imge" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Plant for Your Home END--> */}

                {/* <!-- What People Says Start --> */}
                <ReviewSwiper />
                {/* <!-- What People Says end --> */}

                {/* <!-- Read our recent Blogs START--> */}
                <section>
                    <div className="inner-recentBlock">
                        <div className="container">
                            <h1 className="section-header">
                                Read Our Recent Blogs
                            </h1>
                            <p className="section-description">
                                Gorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet
                            </p>
                            <div className="row g-3 my-5">
                                <div className="col-md-6 col-lg-4">
                                    <Link href="./blog-details.html">
                                        <div className="blog-cart">
                                            <figure>
                                                <img className="blog-img" src="/assets/images/home/blog-1.png" alt="blog image" />
                                            </figure>
                                            <div className="blog-cart-content">
                                                <h1 className="blog-title line-clamp2">
                                                    How to choose best plant for you that makes your house design better
                                                </h1>
                                                <div className="blog-author">
                                                    <p className="author-name">
                                                        By Akash Basak
                                                    </p>
                                                    <p className="publish-date">
                                                        10 june 2024
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <Link href="./blog-details.html">
                                        <div className="blog-cart">
                                            <figure>
                                                <img className="blog-img" src="/assets/images/home/blog-2.png" alt="blog image" />
                                            </figure>
                                            <div className="blog-cart-content">
                                                <h1 className="blog-title line-clamp2">
                                                    How to choose best plant for you that makes your house design better
                                                </h1>
                                                <div className="blog-author">
                                                    <p className="author-name">
                                                        By Akash Basak
                                                    </p>
                                                    <p className="publish-date">
                                                        10 june 2024
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <Link href="./blog-details.html">
                                        <div className="blog-cart">
                                            <figure>
                                                <img className="blog-img" src="/assets/images/home/blog-3.png" alt="blog image" />
                                            </figure>
                                            <div className="blog-cart-content">
                                                <h1 className="blog-title line-clamp2">
                                                    How to choose best plant for you that makes your house design better
                                                </h1>
                                                <div className="blog-author">
                                                    <p className="author-name">
                                                        By Akash Basak
                                                    </p>
                                                    <p className="publish-date">
                                                        10 june 2024
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link href="/blog" className="primary-button">
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Read our recent Blogs End--> */}

                {/* <!-- Support section START --> */}
                <section>
                    <div className="inner-support">
                        <div className="container">
                            <div className="row g-3 ">
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="support-content">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32" fill="none">
                                                <path
                                                    d="M44.4302 13.7107L43.2002 8.78866C43.3668 8.75318 43.5161 8.66165 43.6233 8.52934C43.7305 8.39702 43.7891 8.23195 43.7892 8.06166V7.26766C43.7884 6.4391 43.4589 5.64471 42.873 5.05883C42.2872 4.47295 41.4928 4.14346 40.6642 4.14266H35.0642V2.51066C35.0639 2.10284 34.9018 1.7118 34.6134 1.42342C34.3251 1.13505 33.934 0.972921 33.5262 0.972656H4.95321C4.54539 0.972921 4.15435 1.13505 3.86597 1.42342C3.5776 1.7118 3.41548 2.10284 3.41521 2.51066V16.0007C3.41521 16.198 3.4936 16.3872 3.63312 16.5267C3.77265 16.6663 3.96189 16.7447 4.15921 16.7447C4.35653 16.7447 4.54577 16.6663 4.6853 16.5267C4.82483 16.3872 4.90321 16.198 4.90321 16.0007V2.51066C4.90321 2.4974 4.90848 2.48468 4.91786 2.4753C4.92723 2.46593 4.93995 2.46066 4.95321 2.46066H33.5212C33.5345 2.46066 33.5472 2.46593 33.5566 2.4753C33.5659 2.48468 33.5712 2.4974 33.5712 2.51066V16.0017C33.5712 16.199 33.6496 16.3882 33.7891 16.5277C33.9286 16.6673 34.1179 16.7457 34.3152 16.7457C34.5125 16.7457 34.7018 16.6673 34.8413 16.5277C34.9808 16.3882 35.0592 16.199 35.0592 16.0017V15.1587H43.8412C44.3552 15.1597 44.8557 15.3234 45.271 15.6262C45.6863 15.9291 45.9951 16.3556 46.1532 16.8447H43.8412C43.6439 16.8447 43.4547 16.923 43.3151 17.0626C43.1756 17.2021 43.0972 17.3913 43.0972 17.5887V19.1757C43.098 19.7936 43.3438 20.3861 43.7808 20.8231C44.2178 21.26 44.8102 21.5059 45.4282 21.5067H46.2712V24.7797H44.3232C44.0038 23.8528 43.4031 23.0486 42.6048 22.4794C41.8066 21.9102 40.8506 21.6042 39.8702 21.6042C38.8898 21.6042 37.9338 21.9102 37.1356 22.4794C36.3373 23.0486 35.7366 23.8528 35.4172 24.7797H35.0592V19.1797C35.0592 18.9823 34.9808 18.7931 34.8413 18.6536C34.7018 18.514 34.5125 18.4357 34.3152 18.4357C34.1179 18.4357 33.9286 18.514 33.7891 18.6536C33.6496 18.7931 33.5712 18.9823 33.5712 19.1797V24.7797H18.1352C17.8158 23.8528 17.2151 23.0486 16.4168 22.4794C15.6186 21.9102 14.6626 21.6042 13.6822 21.6042C12.7018 21.6042 11.7458 21.9102 10.9476 22.4794C10.1494 23.0486 9.54864 23.8528 9.22921 24.7797H4.95321C4.93995 24.7797 4.92723 24.7744 4.91786 24.765C4.90848 24.7556 4.90321 24.7429 4.90321 24.7297V23.0927H8.12721C8.32453 23.0927 8.51377 23.0143 8.6533 22.8747C8.79283 22.7352 8.87121 22.546 8.87121 22.3487C8.87121 22.1513 8.79283 21.9621 8.6533 21.8226C8.51377 21.683 8.32453 21.6047 8.12721 21.6047H0.985211C0.78789 21.6047 0.598651 21.683 0.459123 21.8226C0.319596 21.9621 0.241211 22.1513 0.241211 22.3487C0.241211 22.546 0.319596 22.7352 0.459123 22.8747C0.598651 23.0143 0.78789 23.0927 0.985211 23.0927H3.41521V24.7297C3.41548 25.1375 3.5776 25.5285 3.86597 25.8169C4.15435 26.1053 4.54539 26.2674 4.95321 26.2677H8.97221C8.97221 26.2847 8.97221 26.3007 8.97221 26.3177C8.97221 27.5674 9.46865 28.7659 10.3523 29.6495C11.236 30.5332 12.4345 31.0297 13.6842 31.0297C14.9339 31.0297 16.1324 30.5332 17.0161 29.6495C17.8998 28.7659 18.3962 27.5674 18.3962 26.3177C18.3962 26.3007 18.3962 26.2847 18.3962 26.2677H35.1592C35.1592 26.2847 35.1592 26.3007 35.1592 26.3177C35.1592 27.5674 35.6557 28.7659 36.5393 29.6495C37.423 30.5332 38.6215 31.0297 39.8712 31.0297C41.1209 31.0297 42.3194 30.5332 43.2031 29.6495C44.0868 28.7659 44.5832 27.5674 44.5832 26.3177C44.5832 26.3007 44.5832 26.2847 44.5832 26.2677H47.0152C47.2125 26.2677 47.4018 26.1893 47.5413 26.0497C47.6808 25.9102 47.7592 25.721 47.7592 25.5237V17.5877C47.7588 16.6503 47.4229 15.7441 46.8123 15.033C46.2017 14.3219 45.3567 13.8528 44.4302 13.7107ZM35.0592 5.63066H40.6592C41.0932 5.63119 41.5093 5.80383 41.8162 6.11071C42.123 6.41759 42.2957 6.83366 42.2962 7.26766V7.31766H35.0592V5.63066ZM35.0592 13.6657V8.81066H41.6702L42.8852 13.6717L35.0592 13.6657ZM13.6822 29.5417C13.0446 29.5417 12.4212 29.3526 11.8911 28.9983C11.3609 28.6441 10.9476 28.1405 10.7036 27.5514C10.4596 26.9623 10.3958 26.3141 10.5202 25.6887C10.6446 25.0633 10.9516 24.4888 11.4025 24.0379C11.8534 23.5871 12.4278 23.28 13.0532 23.1556C13.6786 23.0312 14.3269 23.0951 14.916 23.3391C15.5051 23.5831 16.0086 23.9963 16.3629 24.5265C16.7171 25.0567 16.9062 25.68 16.9062 26.3177C16.9054 27.1725 16.5655 27.9921 15.961 28.5965C15.3566 29.2009 14.537 29.5409 13.6822 29.5417ZM39.8702 29.5417C39.2326 29.5417 38.6092 29.3526 38.0791 28.9983C37.5489 28.6441 37.1356 28.1405 36.8916 27.5514C36.6476 26.9623 36.5838 26.3141 36.7082 25.6887C36.8326 25.0633 37.1396 24.4888 37.5905 24.0379C38.0414 23.5871 38.6158 23.28 39.2412 23.1556C39.8666 23.0312 40.5149 23.0951 41.104 23.3391C41.6931 23.5831 42.1966 23.9963 42.5509 24.5265C42.9051 25.0567 43.0942 25.68 43.0942 26.3177C43.0934 27.1725 42.7535 27.9921 42.149 28.5965C41.5446 29.2009 40.725 29.5409 39.8702 29.5417ZM46.2702 20.0187H45.4272C45.2037 20.0184 44.9894 19.9295 44.8314 19.7715C44.6734 19.6134 44.5845 19.3992 44.5842 19.1757V18.3327H46.2702V20.0187Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M13.6786 24.7827C13.3744 24.7827 13.0771 24.8729 12.8242 25.0419C12.5712 25.2109 12.3741 25.4511 12.2577 25.7321C12.1413 26.0132 12.1108 26.3224 12.1702 26.6208C12.2295 26.9191 12.376 27.1931 12.5911 27.4082C12.8062 27.6233 13.0802 27.7698 13.3786 27.8292C13.6769 27.8885 13.9862 27.858 14.2672 27.7416C14.5482 27.6252 14.7884 27.4281 14.9574 27.1752C15.1264 26.9222 15.2166 26.6249 15.2166 26.3207C15.2164 25.9129 15.0542 25.5218 14.7659 25.2335C14.4775 24.9451 14.0865 24.783 13.6786 24.7827Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M39.8701 24.7827C39.5658 24.7825 39.2684 24.8725 39.0153 25.0414C38.7623 25.2103 38.565 25.4504 38.4484 25.7314C38.3318 26.0125 38.3013 26.3217 38.3605 26.6201C38.4197 26.9186 38.5661 27.1927 38.7812 27.4079C38.9962 27.6231 39.2703 27.7696 39.5686 27.8291C39.867 27.8885 40.1763 27.8581 40.4574 27.7417C40.7385 27.6254 40.9787 27.4282 41.1478 27.1753C41.3168 26.9223 41.4071 26.6249 41.4071 26.3207C41.4068 25.9131 41.2448 25.5222 40.9566 25.2338C40.6685 24.9455 40.2777 24.7832 39.8701 24.7827Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M31.1411 21.6057H20.0311C19.8338 21.6057 19.6445 21.6841 19.505 21.8236C19.3655 21.9631 19.2871 22.1524 19.2871 22.3497C19.2871 22.547 19.3655 22.7363 19.505 22.8758C19.6445 23.0153 19.8338 23.0937 20.0311 23.0937H31.1411C31.3384 23.0937 31.5277 23.0153 31.6672 22.8758C31.8067 22.7363 31.8851 22.547 31.8851 22.3497C31.8851 22.1524 31.8067 21.9631 31.6672 21.8236C31.5277 21.6841 31.3384 21.6057 31.1411 21.6057Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M12.0951 18.4316H2.57213C2.37481 18.4316 2.18556 18.51 2.04604 18.6496C1.90651 18.7891 1.82812 18.9783 1.82812 19.1757C1.82812 19.373 1.90651 19.5622 2.04604 19.7018C2.18556 19.8413 2.37481 19.9196 2.57213 19.9196H12.0951C12.2924 19.9196 12.4817 19.8413 12.6212 19.7018C12.7607 19.5622 12.8391 19.373 12.8391 19.1757C12.8391 18.9783 12.7607 18.7891 12.6212 18.6496C12.4817 18.51 12.2924 18.4316 12.0951 18.4316Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M26.1122 8.3316C25.9727 8.19213 25.7835 8.11377 25.5862 8.11377C25.389 8.11377 25.1998 8.19213 25.0602 8.3316L18.4442 14.9476L15.0022 11.5056C14.9336 11.4344 14.8515 11.3777 14.7607 11.3386C14.6699 11.2995 14.5723 11.2789 14.4734 11.278C14.3746 11.2771 14.2766 11.2959 14.1851 11.3333C14.0936 11.3708 14.0105 11.426 13.9406 11.4959C13.8707 11.5658 13.8154 11.6489 13.778 11.7404C13.7406 11.8319 13.7218 11.93 13.7227 12.0288C13.7236 12.1276 13.7442 12.2253 13.7832 12.3161C13.8223 12.4069 13.8791 12.489 13.9502 12.5576L17.9182 16.5256C18.0578 16.6651 18.247 16.7434 18.4442 16.7434C18.6415 16.7434 18.8307 16.6651 18.9702 16.5256L26.1122 9.38361C26.2517 9.24409 26.3301 9.05488 26.3301 8.8576C26.3301 8.66033 26.2517 8.47112 26.1122 8.3316Z"
                                                    fill="#00715D" />
                                            </svg>
                                        </div>
                                        <div className="support-text">
                                            <h4>
                                                Free Shipping
                                            </h4>
                                            <p>
                                                Free Shipping over $100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="support-content">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                                <path
                                                    d="M41.5804 8.83621L33.7232 5.69335C33.5356 5.61817 33.3263 5.61817 33.1387 5.69335L25.2815 8.83621C25.1359 8.89458 25.011 8.99523 24.9231 9.12518C24.8351 9.25513 24.7881 9.40844 24.7881 9.56535V17.6865C24.7922 19.1787 25.1805 20.6447 25.9156 21.9433C26.6508 23.2418 27.708 24.3292 28.9854 25.1005L33.0271 27.5252C33.1491 27.5983 33.2887 27.6369 33.4309 27.6369C33.5732 27.6369 33.7128 27.5983 33.8348 27.5252L37.3595 25.4101V34.2101C37.3591 34.5517 37.2232 34.8792 36.9816 35.1208C36.7401 35.3623 36.4126 35.4982 36.0709 35.4986H5.64809C5.30646 35.4982 4.97895 35.3623 4.73739 35.1208C4.49582 34.8792 4.35993 34.5517 4.35951 34.2101V16.6368H22.4309C22.6393 16.6368 22.8392 16.554 22.9865 16.4067C23.1339 16.2593 23.2167 16.0595 23.2167 15.8511C23.2167 15.6427 23.1339 15.4428 22.9865 15.2955C22.8392 15.1481 22.6393 15.0654 22.4309 15.0654H4.35951V13.2111C4.35993 12.8694 4.49582 12.5419 4.73739 12.3004C4.97895 12.0588 5.30646 11.9229 5.64809 11.9225H22.4309C22.6393 11.9225 22.8392 11.8397 22.9865 11.6924C23.1339 11.545 23.2167 11.3452 23.2167 11.1368C23.2167 10.9284 23.1339 10.7285 22.9865 10.5812C22.8392 10.4338 22.6393 10.3511 22.4309 10.3511H5.64809C4.88969 10.3515 4.16248 10.6529 3.62622 11.1892C3.08996 11.7255 2.7885 12.4527 2.78809 13.2111V34.2054C2.7885 34.9637 3.08996 35.691 3.62622 36.2272C4.16248 36.7635 4.88969 37.0649 5.64809 37.0654H36.0709C36.8293 37.0649 37.5565 36.7635 38.0928 36.2272C38.6291 35.691 38.9305 34.9637 38.9309 34.2054V24.3368C39.9097 23.5253 40.6985 22.5088 41.2415 21.3592C41.7846 20.2096 42.0687 18.9548 42.0738 17.6834V9.56535C42.0738 9.40844 42.0267 9.25513 41.9388 9.12518C41.8509 8.99523 41.726 8.89458 41.5804 8.83621ZM40.5024 17.6865C40.4992 18.9075 40.1814 20.1071 39.5797 21.1695C38.978 22.232 38.1127 23.1215 37.0672 23.7522L33.4309 25.9349L29.7947 23.7522C28.7492 23.1215 27.8839 22.232 27.2822 21.1695C26.6805 20.1071 26.3627 18.9075 26.3595 17.6865V10.0965L33.4309 7.26792L40.5024 10.0965V17.6865Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M30.8444 15.43C30.7714 15.3569 30.6848 15.2989 30.5895 15.2594C30.4941 15.2198 30.3919 15.1994 30.2887 15.1993C30.1854 15.1992 30.0832 15.2195 29.9878 15.2589C29.8924 15.2984 29.8057 15.3562 29.7326 15.4292C29.6596 15.5021 29.6016 15.5888 29.562 15.6841C29.5224 15.7795 29.502 15.8817 29.502 15.9849C29.5019 16.0881 29.5221 16.1904 29.5616 16.2858C29.601 16.3812 29.6589 16.4679 29.7318 16.541L31.8281 18.6357C31.9754 18.783 32.1753 18.8657 32.3836 18.8657C32.5919 18.8657 32.7918 18.783 32.9391 18.6357L37.1301 14.4447C37.2774 14.2971 37.3601 14.0971 37.36 13.8886C37.3598 13.6801 37.2769 13.4802 37.1293 13.3329C36.9818 13.1856 36.7818 13.1029 36.5733 13.103C36.3648 13.1032 36.1649 13.1861 36.0175 13.3337L32.3828 16.97L30.8444 15.43Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M8.28767 30.7795C8.07928 30.7795 7.87943 30.8623 7.73208 31.0097C7.58473 31.157 7.50195 31.3569 7.50195 31.5653C7.50195 31.7736 7.58473 31.9735 7.73208 32.1208C7.87943 32.2682 8.07928 32.351 8.28767 32.351H14.5734C14.7818 32.351 14.9816 32.2682 15.129 32.1208C15.2763 31.9735 15.3591 31.7736 15.3591 31.5653C15.3591 31.3569 15.2763 31.157 15.129 31.0097C14.9816 30.8623 14.7818 30.7795 14.5734 30.7795H8.28767Z"
                                                    fill="#00715D" />
                                            </svg>
                                        </div>
                                        <div className="support-text">
                                            <h4>
                                                Secure Payment
                                            </h4>
                                            <p>
                                                100% secure payment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="support-content">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="39" viewBox="0 0 45 39" fill="none">
                                                <path
                                                    d="M28.0151 31.1749H17.5041C17.3391 31.1749 17.1809 31.1094 17.0643 30.9927C16.9476 30.8761 16.8821 30.7179 16.8821 30.5529C16.8821 30.3879 16.9476 30.2297 17.0643 30.1131C17.1809 29.9964 17.3391 29.9309 17.5041 29.9309H28.0151C28.2295 29.9321 28.4421 29.8908 28.6405 29.8095C28.8389 29.7281 29.0192 29.6083 29.1711 29.4569C29.1991 29.4289 29.2231 29.4019 29.2461 29.3769C29.2584 29.3578 29.2717 29.3395 29.2861 29.3219C29.5279 29.0305 29.6599 28.6636 29.6591 28.2849C29.6585 27.8485 29.485 27.4302 29.1764 27.1216C28.8678 26.813 28.4495 26.6394 28.0131 26.6389H22.1401C22.0537 26.6393 21.9682 26.6218 21.889 26.5873C21.8098 26.5529 21.7387 26.5024 21.6801 26.4389C20.8963 25.5785 19.9418 24.8911 18.8773 24.4205C17.8128 23.9499 16.6619 23.7065 15.4981 23.7059H7.95208C7.78711 23.7059 7.62891 23.6404 7.51226 23.5237C7.39561 23.4071 7.33008 23.2489 7.33008 23.0839C7.33008 22.919 7.39561 22.7607 7.51226 22.6441C7.62891 22.5274 7.78711 22.4619 7.95208 22.4619H15.5031C16.7933 22.4628 18.0702 22.7232 19.2576 23.2278C20.4451 23.7324 21.5189 24.4707 22.4151 25.3989H28.0151C28.7812 25.3997 29.5158 25.7043 30.0577 26.2458C30.5997 26.7874 30.9048 27.5218 30.9061 28.2879C30.9064 28.9333 30.6887 29.5599 30.2881 30.0659C30.2724 30.0916 30.2546 30.116 30.2351 30.1389C30.1731 30.2089 30.1191 30.2719 30.0551 30.3389C29.7877 30.6076 29.4698 30.8206 29.1196 30.9658C28.7695 31.111 28.3941 31.1855 28.0151 31.1849V31.1749Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M22.7361 38.5347C21.2017 38.5361 19.6789 38.2698 18.2361 37.7477L7.73607 33.9337C7.65925 33.9058 7.58867 33.8631 7.52838 33.8079C7.46808 33.7527 7.41924 33.6862 7.38465 33.6121C7.35006 33.5381 7.3304 33.4579 7.32678 33.3763C7.32316 33.2946 7.33566 33.2131 7.36357 33.1362C7.39148 33.0594 7.43424 32.9888 7.48942 32.9285C7.5446 32.8682 7.61112 32.8194 7.68517 32.7848C7.75923 32.7502 7.83937 32.7306 7.92103 32.7269C8.00268 32.7233 8.08425 32.7358 8.16107 32.7637L18.6611 36.5787C20.2055 37.1349 21.8473 37.3693 23.4856 37.2677C25.124 37.1661 26.7242 36.7305 28.1881 35.9877L42.4411 28.7087C41.6708 28.0934 40.7557 27.6857 39.783 27.5245C38.8104 27.3633 37.8127 27.4539 36.8851 27.7877L30.0521 30.2747C29.963 30.3228 29.8633 30.3479 29.7621 30.3477C29.6363 30.349 29.5131 30.3121 29.4087 30.2419C29.3043 30.1716 29.2237 30.0714 29.1775 29.9545C29.1312 29.8375 29.1215 29.7092 29.1497 29.5866C29.1778 29.464 29.2424 29.3528 29.3351 29.2677C29.3972 29.2086 29.4712 29.1633 29.5521 29.1347L36.4661 26.6177C37.6251 26.2009 38.8735 26.0964 40.0857 26.3148C41.2979 26.5332 42.4313 27.0667 43.3721 27.8617L43.9591 28.3707C44.0361 28.4374 44.0955 28.522 44.1322 28.617C44.1688 28.712 44.1816 28.8146 44.1694 28.9157C44.1571 29.0168 44.1203 29.1134 44.062 29.1969C44.0037 29.2804 43.9258 29.3484 43.8351 29.3947L28.7521 37.0957C26.8878 38.0419 24.8267 38.535 22.7361 38.5347Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M7.94605 35.6948H1.24605C1.1642 35.695 1.08313 35.6789 1.00748 35.6477C0.931835 35.6164 0.863104 35.5705 0.805226 35.5127C0.747349 35.4548 0.701465 35.386 0.670203 35.3104C0.638941 35.2348 0.622916 35.1537 0.623048 35.0718V21.5248C0.623048 21.3599 0.68858 21.2017 0.805227 21.085C0.921875 20.9684 1.08008 20.9028 1.24505 20.9028H7.94505C8.11001 20.9028 8.26822 20.9684 8.38487 21.085C8.50152 21.2017 8.56705 21.3599 8.56705 21.5248V35.0718C8.56718 35.1535 8.55122 35.2344 8.52008 35.3099C8.48895 35.3855 8.44324 35.4541 8.38558 35.5119C8.32791 35.5698 8.25942 35.6157 8.184 35.6471C8.10859 35.6785 8.02773 35.6947 7.94605 35.6948ZM1.86705 34.4498H7.32305V22.1498H1.86705V34.4498Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M28.31 22.6648C26.1146 22.6648 23.9685 22.0138 22.1431 20.7942C20.3177 19.5745 18.895 17.8409 18.0549 15.8126C17.2148 13.7844 16.995 11.5525 17.4232 9.39935C17.8515 7.24616 18.9087 5.26833 20.4611 3.71596C22.0134 2.1636 23.9913 1.10643 26.1445 0.678132C28.2977 0.249836 30.5295 0.469654 32.5577 1.30979C34.586 2.14992 36.3196 3.57263 37.5393 5.39802C38.759 7.2234 39.41 9.36948 39.41 11.5648C39.41 13.0225 39.1229 14.4659 38.565 15.8126C38.0072 17.1593 37.1896 18.383 36.1589 19.4137C35.1281 20.4445 33.9045 21.2621 32.5577 21.8199C31.211 22.3777 29.7676 22.6648 28.31 22.6648ZM28.31 1.71785C26.3616 1.71785 24.457 2.2956 22.837 3.37804C21.2171 4.46048 19.9544 5.999 19.2088 7.79903C18.4632 9.59907 18.2681 11.5798 18.6482 13.4907C19.0284 15.4016 19.9666 17.1569 21.3443 18.5346C22.7219 19.9122 24.4772 20.8505 26.3881 21.2306C28.299 21.6107 30.2797 21.4156 32.0798 20.67C33.8798 19.9244 35.4183 18.6618 36.5008 17.0418C37.5832 15.4218 38.161 13.5172 38.161 11.5688C38.161 8.9562 37.1231 6.45056 35.2757 4.60314C33.4283 2.75572 30.9226 1.71785 28.31 1.71785Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M28.3099 12.192C27.6399 12.1709 26.991 11.953 26.4441 11.5655C25.8972 11.1779 25.4766 10.6379 25.2347 10.0128C24.9929 9.38763 24.9405 8.70511 25.0842 8.05039C25.2278 7.39568 25.5611 6.79778 26.0425 6.33133C26.5238 5.86488 27.1319 5.55054 27.7908 5.42756C28.4497 5.30457 29.1303 5.37838 29.7475 5.63978C30.3647 5.90118 30.8913 6.33859 31.2614 6.8974C31.6316 7.45621 31.8289 8.11167 31.8289 8.78195C31.8289 8.94692 31.7634 9.10512 31.6467 9.22177C31.5301 9.33842 31.3718 9.40395 31.2069 9.40395C31.0419 9.40395 30.8837 9.33842 30.7671 9.22177C30.6504 9.10512 30.5849 8.94692 30.5849 8.78195C30.6073 8.32717 30.4929 7.87612 30.2564 7.487C30.02 7.09788 29.6723 6.78854 29.2584 6.59891C28.8444 6.40928 28.3831 6.34805 27.934 6.42313C27.4849 6.49821 27.0686 6.70616 26.7389 7.02012C26.4091 7.33409 26.181 7.73968 26.084 8.18455C25.9869 8.62943 26.0255 9.09317 26.1946 9.51593C26.3636 9.9387 26.6556 10.3011 27.0326 10.5563C27.4097 10.8116 27.8546 10.948 28.3099 10.948C28.3916 10.948 28.4724 10.964 28.5479 10.9953C28.6234 11.0266 28.6919 11.0724 28.7497 11.1301C28.8075 11.1879 28.8533 11.2565 28.8845 11.3319C28.9158 11.4074 28.9319 11.4883 28.9319 11.57C28.9319 11.6516 28.9158 11.7325 28.8845 11.808C28.8533 11.8834 28.8075 11.952 28.7497 12.0098C28.6919 12.0675 28.6234 12.1133 28.5479 12.1446C28.4724 12.1759 28.3916 12.192 28.3099 12.192Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M28.31 17.7719C27.3916 17.785 26.5054 17.4334 25.8457 16.7942C25.1861 16.155 24.8068 15.2803 24.791 14.3619C24.791 14.197 24.8565 14.0388 24.9732 13.9221C25.0898 13.8055 25.248 13.7399 25.413 13.7399C25.578 13.7399 25.7362 13.8055 25.8528 13.9221C25.9695 14.0388 26.035 14.197 26.035 14.3619C26.0124 14.8167 26.1267 15.2679 26.363 15.6571C26.5993 16.0464 26.9469 16.3559 27.3608 16.5457C27.7747 16.7354 28.236 16.7968 28.6852 16.7219C29.1344 16.6469 29.5507 16.439 29.8806 16.1251C30.2105 15.8112 30.4387 15.4056 30.5358 14.9607C30.6329 14.5158 30.5945 14.052 30.4254 13.6292C30.2564 13.2064 29.9645 12.8439 29.5874 12.5886C29.2103 12.3333 28.7654 12.1969 28.31 12.1969C28.145 12.1969 27.9868 12.1314 27.8702 12.0147C27.7535 11.8981 27.688 11.7399 27.688 11.5749C27.688 11.41 27.7535 11.2518 27.8702 11.1351C27.9868 11.0185 28.145 10.9529 28.31 10.9529C28.7676 10.9373 29.2238 11.0139 29.6512 11.1782C30.0786 11.3425 30.4685 11.5911 30.7978 11.9093C31.1271 12.2275 31.389 12.6087 31.5678 13.0303C31.7467 13.4518 31.8388 13.905 31.8388 14.3629C31.8388 14.8208 31.7467 15.274 31.5678 15.6956C31.389 16.1171 31.1271 16.4983 30.7978 16.8165C30.4685 17.1347 30.0786 17.3834 29.6512 17.5477C29.2238 17.712 28.7676 17.7886 28.31 17.7729V17.7719Z"
                                                    fill="#00715D" />
                                                <path
                                                    d="M28.3105 18.8179C28.1455 18.8179 27.9873 18.7523 27.8707 18.6357C27.754 18.5191 27.6885 18.3608 27.6885 18.1959V4.94988C27.6885 4.8682 27.7046 4.78732 27.7358 4.71185C27.7671 4.63639 27.8129 4.56782 27.8707 4.51006C27.9284 4.4523 27.997 4.40649 28.0724 4.37523C28.1479 4.34397 28.2288 4.32788 28.3105 4.32788C28.3922 4.32788 28.473 4.34397 28.5485 4.37523C28.624 4.40649 28.6925 4.4523 28.7503 4.51006C28.8081 4.56782 28.8539 4.63639 28.8851 4.71185C28.9164 4.78732 28.9325 4.8682 28.9325 4.94988V18.1959C28.9325 18.3608 28.8669 18.5191 28.7503 18.6357C28.6336 18.7523 28.4754 18.8179 28.3105 18.8179Z"
                                                    fill="#00715D" />
                                            </svg>
                                        </div>
                                        <div className="support-text">
                                            <h4>
                                                Easy Return
                                            </h4>
                                            <p>
                                                Money Back Guaranty
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="support-content">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
                                                <path
                                                    d="M32.0639 14.0234C31.9742 10.4228 30.4808 6.99986 27.9026 4.48499C25.3243 1.97013 21.8652 0.5625 18.2635 0.5625C14.6618 0.5625 11.2028 1.97013 8.62446 4.48499C6.04617 6.99986 4.55285 10.4228 4.46316 14.0234C3.91303 14.0648 3.37664 14.2153 2.88515 14.4659C2.39366 14.7165 1.95689 15.0623 1.60022 15.4831C1.24355 15.904 0.974106 16.3916 0.807541 16.9176C0.640976 17.4435 0.580618 17.9973 0.629973 18.5468V25.7541C0.581702 26.3707 0.667612 26.9904 0.88179 27.5706C1.09597 28.1508 1.43333 28.6777 1.87065 29.115C2.30796 29.5523 2.83485 29.8896 3.41504 30.1038C3.99523 30.318 4.61494 30.4039 5.23151 30.3556H7.45524C7.65845 30.3556 7.85333 30.2749 7.99703 30.1312C8.14072 29.9875 8.22145 29.7926 8.22145 29.5894V14.7404C8.22145 14.5371 8.14072 14.3423 7.99703 14.1986C7.85333 14.0549 7.65845 13.9742 7.45524 13.9742H6.00093C6.00093 10.7206 7.29339 7.60038 9.59397 5.2998C11.8946 2.99921 15.0148 1.70676 18.2683 1.70676C21.5218 1.70676 24.6421 2.99921 26.9427 5.2998C29.2433 7.60038 30.5357 10.7206 30.5357 13.9742H29.0739C28.8707 13.9742 28.6758 14.0549 28.5321 14.1986C28.3884 14.3423 28.3077 14.5371 28.3077 14.7404V29.5605C28.3077 29.7637 28.3884 29.9586 28.5321 30.1023C28.6758 30.246 28.8707 30.3267 29.0739 30.3267H30.5304C30.3163 35.5939 27.7855 36.8288 22.7334 37.0503V36.5367C22.7333 36.3351 22.6934 36.1356 22.6161 35.9494C22.5387 35.7633 22.4255 35.5942 22.2828 35.4519C22.14 35.3096 21.9707 35.1968 21.7843 35.12C21.598 35.0432 21.3983 35.0038 21.1967 35.0043H16.3812C15.9745 35.0043 15.5844 35.1658 15.2968 35.4534C15.0092 35.741 14.8477 36.131 14.8477 36.5378V39.029C14.8477 39.4357 15.0092 39.8258 15.2968 40.1133C15.5844 40.4009 15.9745 40.5625 16.3812 40.5625H21.2192C21.6259 40.5625 22.016 40.4009 22.3035 40.1133C22.5911 39.8258 22.7527 39.4357 22.7527 39.029V38.5838C27.6132 38.3613 31.8156 37.3575 32.0628 30.2807C32.6129 30.2393 33.1493 30.0889 33.6408 29.8383C34.1323 29.5877 34.5691 29.2419 34.9257 28.821C35.2824 28.4001 35.5518 27.9125 35.7184 27.3865C35.885 26.8606 35.9453 26.3068 35.896 25.7573V18.5511C35.9468 18.0012 35.8876 17.4467 35.7217 16.9199C35.5558 16.3932 35.2866 15.9048 34.9298 15.4832C34.5731 15.0617 34.1359 14.7155 33.6438 14.4649C33.1517 14.2142 32.6146 14.0641 32.0639 14.0234ZM6.68581 15.4531V28.7911H5.18764C4.77388 28.8361 4.35529 28.7878 3.96271 28.6495C3.57013 28.5113 3.21355 28.2868 2.91925 27.9925C2.62496 27.6982 2.40043 27.3416 2.26222 26.9491C2.12401 26.5565 2.07564 26.1379 2.12066 25.7241V18.5179C2.07564 18.1041 2.12401 17.6856 2.26222 17.293C2.40043 16.9004 2.62496 16.5438 2.91925 16.2495C3.21355 15.9552 3.57013 15.7307 3.96271 15.5925C4.35529 15.4543 4.77388 15.4059 5.18764 15.4509L6.68581 15.4531ZM21.2149 37.8711V39.0365H16.3812V36.5452H21.2192L21.2149 37.8711ZM34.3593 25.7498C34.4043 26.1636 34.3559 26.5822 34.2177 26.9747C34.0795 27.3673 33.855 27.7239 33.5607 28.0182C33.2664 28.3125 32.9098 28.537 32.5172 28.6752C32.1246 28.8134 31.706 28.8618 31.2923 28.8168H29.8401V15.5066H31.3383C31.7521 15.4615 32.1707 15.5099 32.5632 15.6481C32.9558 15.7863 33.3124 16.0109 33.6067 16.3052C33.901 16.5995 34.1255 16.956 34.2637 17.3486C34.4019 17.7412 34.4503 18.1598 34.4053 18.5736L34.3593 25.7498Z"
                                                    fill="#00715D" />
                                            </svg>
                                        </div>
                                        <div className="support-text">
                                            <h4>
                                                27/7 Support
                                            </h4>
                                            <p>
                                                Support 24 hours a day
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Support section End --> */}

            </main>
        </Layout>
    );
};

export default HomePage;
