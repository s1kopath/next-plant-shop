import Layout from "@/components/Layout";
import Link from "next/link";

const BlogPage = () => {
    return (
        <Layout>
            <div className="container">
                <nav className="breadcrumb-nav my-4">
                    <ol className="breadcrumbOl">
                        <li className="breadcrumbItem">
                            <Link href="/">Home</Link>
                            <span> {'>'} </span>
                        </li>
                        <li className="breadcrumbItem">Blog</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- latest-articles START--> */}
            <section>
                <div className="latest-articles">
                    <div className="container">
                        <h1 className="section-header">
                            Latest Articles
                        </h1>
                        <div className="latest-articles-category">
                            <button className="latest-articles-category-btn">
                                Weeping Fig
                            </button>
                            <button className="latest-articles-category-btn">
                                Rubber Plant
                            </button>
                            <button className="latest-articles-category-btn">
                                Parlor Palm
                            </button>
                            <button className="latest-articles-category-btn">
                                Dragon Tree
                            </button><button className="latest-articles-category-btn">
                                Lemon Lime
                            </button>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-4.png" alt="blog image" />
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-5.png" alt="blog image" />
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-6.png" alt="blog image" />
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-7.png" alt="blog image" />
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-8.png" alt="blog image" />
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
                                </a>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <a href="./blog-details.html">
                                    <div className="blog-cart">
                                        <figure>
                                            <img className="blog-img" src="/assets/images/blog/blog-9.png" alt="blog image" />
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
                                </a>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <button className="blog-button">
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- latest-articles End--> */}

            {/* <!-- newsletter start --> */}
            <section>
                <div className="newsletter">
                    <div className="container">
                        <div className="newsletter-inner">
                            <div className="newsletter-inner-cart">
                                <h2 className="title">
                                    Get 10% Off <br />
                                    on Your First Order !
                                </h2>
                                <p className="details">
                                    By subscribing our newsletter
                                </p>
                                <form className="form">
                                    <div className="newsletter-input">
                                        <div className="newsletter-icon mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                                <path
                                                    d="M5.83398 5.0835L8.28566 6.53302C9.715 7.3781 10.2863 7.3781 11.7156 6.53302L14.1673 5.0835"
                                                    stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path
                                                    d="M1.68013 9.22977C1.73461 11.7844 1.76185 13.0617 2.70446 14.0079C3.64706 14.9541 4.95894 14.987 7.58268 15.0529C9.19975 15.0936 10.8009 15.0936 12.418 15.0529C15.0417 14.987 16.3536 14.9541 17.2962 14.0079C18.2388 13.0617 18.266 11.7844 18.3205 9.22977C18.338 8.40836 18.338 7.59181 18.3205 6.77041C18.266 4.2158 18.2388 2.93849 17.2962 1.9923C16.3536 1.04611 15.0417 1.01315 12.418 0.947222C10.8009 0.906592 9.19975 0.90659 7.58268 0.947217C4.95893 1.01313 3.64706 1.04609 2.70445 1.99229C1.76184 2.93848 1.73461 4.21579 1.68013 6.7704C1.66261 7.5918 1.66261 8.40836 1.68013 9.22977Z"
                                                    stroke="#64748B" strokeWidth="1.5" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <input type="text" name="" id="" placeholder="example@gmail.com" />
                                    </div>
                                    <button className="footer-btn">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- newsletter end --> */}
        </Layout>
    );
};

export default BlogPage;
