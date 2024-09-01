import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
SwiperCore.use([Pagination]);

const ReviewSwiper = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section>
            <div className="peopleSays-inner">
                <div className="container">
                    <h1 className="title">
                        What People Says
                    </h1>
                    <p className="details">
                        Gorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet
                    </p>

                    <div className="py-5">
                        <div className="swiper mySwiper">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                className="swiper-wrapper"
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 1, // Show 1 card on small devices
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2, // Show 2 cards on medium devices
                                    },
                                    // when window width is >= 1024px
                                    1024: {
                                        slidesPerView: 3, // Show 3 cards on large devices
                                    },
                                }}
                            >
                                <SwiperSlide className="swiper-slide">
                                    <div className="peopleSays-cart">
                                        <div className="star">
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                        </div>
                                        <p className="details">
                                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                            ac aliquet dolor sit amet, consectetur.
                                        </p>
                                        <div className="people-details">
                                            <img className="people-img" src="/assets/images/home/people1.png" alt="people img" />
                                            <p className="people-name">Mizanur Rahman</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <div className="peopleSays-cart">
                                        <div className="star">
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                        </div>
                                        <p className="details">
                                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                            ac aliquet dolor sit amet, consectetur.
                                        </p>
                                        <div className="people-details">
                                            <img className="people-img" src="/assets/images/home/people2.png" alt="people img" />
                                            <p className="people-name">Mizanur Rahman</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <div className="peopleSays-cart">
                                        <div className="star">
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                        </div>
                                        <p className="details">
                                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                            ac aliquet dolor sit amet, consectetur.
                                        </p>
                                        <div className="people-details">
                                            <img className="people-img" src="/assets/images/home/people1.png" alt="people img" />
                                            <p className="people-name">Mizanur Rahman</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <div className="peopleSays-cart">
                                        <div className="star">
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                        </div>
                                        <p className="details">
                                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                            ac aliquet dolor sit amet, consectetur.
                                        </p>
                                        <div className="people-details">
                                            <img className="people-img" src="/assets/images/home/people2.png" alt="people img" />
                                            <p className="people-name">Mizanur Rahman</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <div className="peopleSays-cart">
                                        <div className="star">
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                            <img src="/assets/images/home/star.svg" alt="star" />
                                        </div>
                                        <p className="details">
                                            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                            ac aliquet dolor sit amet, consectetur.
                                        </p>
                                        <div className="people-details">
                                            <img className="people-img" src="/assets/images/home/people1.png" alt="people img" />
                                            <p className="people-name">Mizanur Rahman</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSwiper;