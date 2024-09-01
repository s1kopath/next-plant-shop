import Link from 'next/link';
import Layout from '../../components/Layout';

import ReviewSwiper from "@/components/libs/ReviewSwiper";

const AboutUsPage = () => {
    return (
        <Layout>
            <div className="container">
                <nav className="breadcrumb-nav my-4">
                    <ol className="breadcrumbOl">
                        <li className="breadcrumbItem">
                            <Link href="/">Home</Link>
                            <span> {'>'} </span>
                        </li>
                        <li className="breadcrumbItem">About Us</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- Our story start --> */}
            <section>
                <div className="story-of-ceo">
                    <div className="container">
                        <div className="story-of-ceo-inner">
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <div className="story-of-ceo-inner-content">
                                        <p className="story-of-ceo-inner-content-ceo">
                                            Our Story
                                        </p>
                                        <h1 className="story-of-ceo-inner-content-title">
                                            We provide the best quality Plants in Bangladesh!
                                        </h1>
                                        <p className="story-of-ceo-inner-content-details">
                                            Welcome to Iconic Style, your premier destination for exquisite fashion products including
                                            three-piece ensembles and sarees. At Iconic Style, we believe that fashion is a
                                        </p>
                                        <div className="story-of-ceo-inner-content-satisfaction">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M9.8361 19.3783L9.63404 19.0341C8.11853 16.452 4.08699 10.9665 4.04647 10.9114L3.92822 10.7508L5.44456 9.25248L9.78468 12.2831C12.5049 8.76758 15.0389 6.34815 16.6966 4.93021C18.5279 3.3638 19.6874 2.66281 19.7356 2.63374L19.7904 2.60083H22.4627L22.0102 3.00394C16.2954 8.09402 10.0956 18.9227 10.0336 19.0315L9.8361 19.3783Z"
                                                        fill="#2E8B7A" />
                                                </svg>
                                            </span>
                                            <p className="text">
                                                100% Customer Satisfaction
                                            </p>
                                        </div>
                                        <div className="story-of-ceo-inner-content-satisfaction">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M9.8361 19.3783L9.63404 19.0341C8.11853 16.452 4.08699 10.9665 4.04647 10.9114L3.92822 10.7508L5.44456 9.25248L9.78468 12.2831C12.5049 8.76758 15.0389 6.34815 16.6966 4.93021C18.5279 3.3638 19.6874 2.66281 19.7356 2.63374L19.7904 2.60083H22.4627L22.0102 3.00394C16.2954 8.09402 10.0956 18.9227 10.0336 19.0315L9.8361 19.3783Z"
                                                        fill="#2E8B7A" />
                                                </svg>
                                            </span>
                                            <p className="text">
                                                Variety of collections
                                            </p>
                                        </div>
                                        <div className="story-of-ceo-inner-content-satisfaction">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M9.8361 19.3783L9.63404 19.0341C8.11853 16.452 4.08699 10.9665 4.04647 10.9114L3.92822 10.7508L5.44456 9.25248L9.78468 12.2831C12.5049 8.76758 15.0389 6.34815 16.6966 4.93021C18.5279 3.3638 19.6874 2.66281 19.7356 2.63374L19.7904 2.60083H22.4627L22.0102 3.00394C16.2954 8.09402 10.0956 18.9227 10.0336 19.0315L9.8361 19.3783Z"
                                                        fill="#2E8B7A" />
                                                </svg>
                                            </span>
                                            <p className="text">
                                                Fresh in quality
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <figure className="left-image position-relative">
                                        <img className="story-of-ceo-inner-imge" src="/assets/images/about-us/Story Image.png" alt="image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Our story end --> */}

            {/* <!-- Story of CEO start --> */}
            <section>
                <div className="story-of-ceo story-of-ceo-top">
                    <div className="container">
                        <div className="story-of-ceo-inner">
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <figure className="left-image">
                                        <img className="story-of-ceo-inner-imge" src="/assets/images/about-us/CEO Image.png" alt="imge" />
                                    </figure>
                                </div>
                                <div className="col-md-6">
                                    <div className="story-of-ceo-inner-content">
                                        <p className="story-of-ceo-inner-content-ceo">
                                            Story of CEO
                                        </p>
                                        <h1 className="story-of-ceo-inner-content-title">
                                            A Journey through the plants to the Natural beauty.
                                        </h1>
                                        <p className="story-of-ceo-inner-content-details">
                                            Welcome to Iconic Style, your premier destination for exquisite fashion products including
                                            three-piece ensembles and sarees. At Iconic Style, we believe that fashion is a r exquisite fashion
                                            products
                                        </p>
                                        <p className="story-of-ceo-inner-content-details">
                                            Welcome to Iconic Style, your premier destination for exquisite fashion products including
                                            three-piece ensembles and sarees. At Iconic Style.
                                        </p>
                                        <div className="d-flex gap-3">
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path
                                                        d="M29.3332 16.0334C29.3332 8.65499 23.3598 2.66669 15.9998 2.66669C8.63984 2.66669 2.6665 8.65499 2.6665 16.0334C2.6665 22.5029 7.25317 27.8897 13.3332 29.1328V20.0435H10.6665V16.0334H13.3332V12.6917C13.3332 10.112 15.4265 8.01339 17.9998 8.01339H21.3332V12.0234H18.6665C17.9332 12.0234 17.3332 12.6249 17.3332 13.3601V16.0334H21.3332V20.0435H17.3332V29.3334C24.0665 28.665 29.3332 22.9708 29.3332 16.0334Z"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path
                                                        d="M18.1467 16.324C18.1386 16.7464 18.0053 17.1569 17.7637 17.5034C17.5221 17.85 17.1831 18.117 16.7895 18.2706C16.396 18.4243 15.9657 18.4576 15.5532 18.3664C15.1407 18.2752 14.7646 18.0636 14.4725 17.7584C14.1804 17.4532 13.9855 17.0681 13.9125 16.652C13.8395 16.2359 13.8916 15.8075 14.0624 15.4211C14.2331 15.0347 14.5148 14.7077 14.8716 14.4815C15.2284 14.2553 15.6443 14.1402 16.0667 14.1507C16.6279 14.1715 17.1589 14.41 17.5472 14.8157C17.9355 15.2214 18.1505 15.7624 18.1467 16.324Z"
                                                        fill="#00715D" />
                                                    <path
                                                        d="M19.684 9.64398H12.4506C11.7349 9.64398 11.0485 9.9283 10.5424 10.4344C10.0363 10.9405 9.75195 11.6269 9.75195 12.3426V19.7386C9.75195 20.093 9.82176 20.444 9.95738 20.7714C10.093 21.0988 10.2918 21.3963 10.5424 21.6469C10.793 21.8975 11.0905 22.0963 11.4179 22.2319C11.7453 22.3675 12.0962 22.4373 12.4506 22.4373H19.684C20.0383 22.4373 20.3893 22.3675 20.7167 22.2319C21.0441 22.0963 21.3416 21.8975 21.5922 21.6469C21.8428 21.3963 22.0416 21.0988 22.1772 20.7714C22.3128 20.444 22.3826 20.093 22.3826 19.7386V12.356C22.384 12.0006 22.3153 11.6484 22.1803 11.3196C22.0454 10.9908 21.8468 10.6918 21.5961 10.4399C21.3454 10.188 21.0475 9.98797 20.7194 9.85139C20.3912 9.71481 20.0394 9.64433 19.684 9.64398ZM16.0666 19.9413C15.3506 19.9575 14.6459 19.7599 14.0427 19.3739C13.4394 18.9878 12.9648 18.4308 12.6795 17.7738C12.3942 17.1168 12.3112 16.3898 12.4409 15.6854C12.5706 14.981 12.9073 14.3313 13.408 13.8191C13.9086 13.3069 14.5505 12.9555 15.2517 12.8097C15.953 12.6639 16.6817 12.7304 17.345 13.0006C18.0083 13.2708 18.5761 13.7325 18.9758 14.3268C19.3755 14.9212 19.5891 15.6211 19.5893 16.3373C19.5947 16.8053 19.5079 17.2698 19.3338 17.7042C19.1597 18.1386 18.9018 18.5345 18.5746 18.8691C18.2475 19.2038 17.8576 19.4708 17.4273 19.6547C16.997 19.8387 16.5346 19.9361 16.0666 19.9413ZM19.9813 12.7346C19.8933 12.7347 19.8062 12.7171 19.7251 12.6831C19.644 12.649 19.5705 12.5991 19.5089 12.5363C19.4473 12.4734 19.3989 12.3989 19.3664 12.3172C19.334 12.2354 19.3182 12.1479 19.32 12.06C19.32 11.881 19.391 11.7094 19.5176 11.5829C19.6441 11.4564 19.8157 11.3853 19.9946 11.3853C20.1736 11.3853 20.3452 11.4564 20.4717 11.5829C20.5982 11.7094 20.6693 11.881 20.6693 12.06C20.6719 12.1552 20.654 12.2499 20.6166 12.3376C20.5793 12.4252 20.5234 12.5038 20.4529 12.5679C20.3824 12.6319 20.2988 12.68 20.208 12.7088C20.1172 12.7376 20.0212 12.7464 19.9266 12.7346H19.9813Z"
                                                        fill="#00715D" />
                                                    <path
                                                        d="M16.0667 2.66667C12.5305 2.64899 9.13204 4.03679 6.61905 6.52477C4.10607 9.01276 2.68435 12.3971 2.66667 15.9333C2.64899 19.4696 4.03679 22.868 6.52477 25.381C9.01276 27.8939 12.3971 29.3157 15.9333 29.3333C17.6843 29.3421 19.4198 29.0059 21.0409 28.3439C22.6619 27.6819 24.1367 26.7072 25.381 25.4752C26.6253 24.2433 27.6147 22.7784 28.2929 21.164C28.971 19.5497 29.3246 17.8176 29.3333 16.0667C29.3421 14.3157 29.0059 12.5802 28.3439 10.9592C27.6819 9.33813 26.7072 7.86336 25.4752 6.61905C24.2433 5.37475 22.7784 4.38527 21.164 3.70712C19.5497 3.02897 17.8176 2.67543 16.0667 2.66667ZM24.164 19.6027C24.1677 20.2008 24.0527 20.7938 23.8255 21.3472C23.5983 21.9006 23.2636 22.4034 22.8407 22.8264C22.4178 23.2495 21.9151 23.5843 21.3618 23.8117C20.8084 24.039 20.2155 24.1542 19.6173 24.1507H12.5187C11.9206 24.154 11.3278 24.0387 10.7746 23.8114C10.2214 23.5842 9.71871 23.2494 9.29573 22.8266C8.87276 22.4037 8.53786 21.9012 8.31041 21.348C8.08296 20.7949 7.96749 20.2021 7.97067 19.604V12.504C7.96696 11.9058 8.08201 11.3129 8.30917 10.7595C8.53633 10.2061 8.87107 9.70332 9.29399 9.28027C9.71691 8.85723 10.2196 8.52234 10.7729 8.29501C11.3262 8.06769 11.9192 7.95246 12.5173 7.956H19.6173C20.2154 7.95247 20.8082 8.06765 21.3614 8.29489C21.9147 8.52213 22.4173 8.8569 22.8402 9.2798C23.2631 9.70271 23.5979 10.2053 23.8251 10.7586C24.0524 11.3118 24.1675 11.9046 24.164 12.5027V19.6027Z"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path
                                                        d="M16.0003 2.66669C23.3718 2.66669 29.3337 8.62859 29.3337 16C29.3337 23.3714 23.3718 29.3334 16.0003 29.3334C8.6289 29.3334 2.66699 23.3714 2.66699 16C2.66699 8.62859 8.6289 2.66669 16.0003 2.66669ZM13.5622 23.0286C19.467 23.0286 22.7051 18.1334 22.7051 13.8857V13.4667C23.3337 13.0095 23.886 12.4381 24.3051 11.7905C23.7337 12.0381 23.1051 12.2095 22.4575 12.3048C23.1241 11.9048 23.6384 11.2762 23.867 10.5334C23.2384 10.8953 22.5527 11.1619 21.8289 11.3143C21.2384 10.6857 20.4003 10.3048 19.486 10.3048C17.7146 10.3048 16.267 11.7524 16.267 13.5238C16.267 13.7714 16.286 14.0191 16.3622 14.2476C13.6956 14.1143 11.3146 12.8381 9.73366 10.8953C9.46699 11.3714 9.29556 11.9238 9.29556 12.5143C9.29556 13.6191 9.86699 14.6095 10.7241 15.181C10.1908 15.181 9.69556 15.0286 9.27652 14.781V14.8191C9.27652 16.381 10.3813 17.6762 11.8479 17.981C11.5813 18.0572 11.2956 18.0953 11.0098 18.0953C10.8003 18.0953 10.6098 18.0762 10.4003 18.0381C10.8003 19.3143 12.0003 20.2476 13.3908 20.2667C12.286 21.1238 10.8956 21.6381 9.3908 21.6381C9.12414 21.6381 8.87652 21.6381 8.6289 21.6C10.0384 22.5143 11.7337 23.0476 13.5432 23.0476"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Story of CEO end --> */}

            {/* <!-- plant-collection start --> */}
            <section>
                <div className="plant-collection">
                    <div className="container">
                        <div className="plant-collection-inner">
                            <div className="row g-4">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="content-cart">
                                        <h3 className="number">
                                            65000+
                                        </h3>
                                        <h4 className="title">
                                            Plants Collection
                                        </h4>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="content-cart">
                                        <h3 className="number">
                                            20+
                                        </h3>
                                        <h4 className="title">
                                            Popular Categories
                                        </h4>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="content-cart">
                                        <h3 className="number">
                                            255+
                                        </h3>
                                        <h4 className="title">
                                            Physical Stores
                                        </h4>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="content-cart">
                                        <h3 className="number">
                                            10500+
                                        </h3>
                                        <h4 className="title">
                                            Happy Customers
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- plant-collection end --> */}

            {/* <!-- What People Says Start --> */}
            <ReviewSwiper />
            {/* <!-- What People Says end --> */}
        </Layout>
    );
};

export default AboutUsPage;