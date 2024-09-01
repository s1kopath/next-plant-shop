import Link from 'next/link';
import Layout from '../../components/Layout';

const ContactUsPage = () => {
    return (
        <Layout>
            <section>
                <div className="contact-us-section">
                    <div className="container">
                        <div className="contact-us-section-inner">
                            <nav className="breadcrumb-nav my-4">
                                <ol className="breadcrumbOl">
                                    <li className="breadcrumbItem">
                                        <Link href="/">Home</Link>
                                        <span> {'>'} </span>
                                    </li>
                                    <li className="breadcrumbItem">Contact Us</li>
                                </ol>
                            </nav>

                            {/* <!-- Contact Us --> */}
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <div className="contact-us-left">
                                        <h1 className="title">
                                            Contact Us
                                        </h1>
                                        <p className="details">
                                            "Have inquiries about our fashion offerings? Need assistance with orders or wholesale partnerships?
                                            Reach out to us, and we'll provide the support you require."
                                        </p>

                                        <div className="location">
                                            <figure className="location-img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                    <path
                                                        d="M16 2.19531C13.0837 2.19875 10.2878 3.35878 8.22563 5.42094C6.16348 7.48309 5.00345 10.279 5.00001 13.1953C4.99733 15.5784 5.77571 17.8967 7.21601 19.7953C7.21601 19.7953 7.51601 20.1903 7.56501 20.2473L16 30.1953L24.439 20.2423C24.483 20.1893 24.784 19.7953 24.784 19.7953L24.785 19.7923C26.2243 17.8944 27.0023 15.5773 27 13.1953C26.9966 10.279 25.8365 7.48309 23.7744 5.42094C21.7122 3.35878 18.9163 2.19875 16 2.19531ZM16 17.1953C15.2089 17.1953 14.4355 16.9607 13.7777 16.5212C13.1199 16.0817 12.6072 15.457 12.3045 14.726C12.0017 13.9951 11.9225 13.1909 12.0769 12.415C12.2312 11.639 12.6122 10.9263 13.1716 10.3669C13.731 9.80748 14.4437 9.42651 15.2196 9.27217C15.9956 9.11783 16.7998 9.19704 17.5307 9.49979C18.2616 9.80254 18.8864 10.3152 19.3259 10.973C19.7654 11.6308 20 12.4042 20 13.1953C19.9987 14.2558 19.5768 15.2724 18.827 16.0223C18.0771 16.7721 17.0605 17.194 16 17.1953Z"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                            <p className="location-details">
                                                1/4 1st Floor , Tolarbagh, Mirpur,
                                                Dhaka, Bangladesh
                                            </p>
                                        </div>

                                        <div className="phone-number">
                                            <figure className="phone-number-img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path
                                                        d="M19.281 22.5001C18.366 22.5001 17.0807 22.1691 15.156 21.0938C12.8156 19.7813 11.0053 18.5696 8.67745 16.2479C6.43307 14.0049 5.34089 12.5527 3.81229 9.77115C2.08542 6.63052 2.37979 4.98427 2.70885 4.28068C3.10073 3.43974 3.67917 2.93677 4.42682 2.43755C4.85149 2.15932 5.30089 1.92081 5.76932 1.72505C5.8162 1.7049 5.85979 1.68568 5.8987 1.66833C6.13073 1.5638 6.48229 1.40583 6.9276 1.57458C7.22479 1.68615 7.4901 1.91443 7.90542 2.32458C8.75714 3.16458 9.92104 5.03537 10.3504 5.95412C10.6387 6.57333 10.8295 6.98208 10.8299 7.44052C10.8299 7.97724 10.5599 8.39115 10.2323 8.83787C10.1709 8.92177 10.1099 9.00193 10.0509 9.07974C9.69417 9.54849 9.61589 9.68396 9.66745 9.92583C9.77198 10.4119 10.5515 11.859 11.8326 13.1372C13.1137 14.4155 14.519 15.1458 15.007 15.2499C15.2592 15.3038 15.3974 15.2222 15.8812 14.8529C15.9506 14.7999 16.0218 14.7451 16.0964 14.6902C16.596 14.3185 16.9907 14.0555 17.5148 14.0555H17.5176C17.9737 14.0555 18.3642 14.2533 19.011 14.5796C19.8548 15.0052 21.7818 16.1541 22.627 17.0068C23.0381 17.4211 23.2673 17.6855 23.3793 17.9822C23.5481 18.429 23.3892 18.7791 23.2856 19.0135C23.2682 19.0524 23.249 19.0951 23.2289 19.1424C23.0315 19.61 22.7916 20.0585 22.5121 20.4821C22.0139 21.2274 21.509 21.8044 20.6662 22.1968C20.2334 22.4015 19.7598 22.5052 19.281 22.5001Z"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                            <div className="details">
                                                <p className="text">
                                                    Call Us
                                                </p>
                                                <p className="number">
                                                    +8801305-093231
                                                </p>
                                            </div>
                                        </div>

                                        <div className="phone-number">
                                            <figure className="phone-number-img">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path
                                                        d="M22.9531 8.608V16.75C22.9532 17.5801 22.6356 18.3788 22.0655 18.9822C21.4953 19.5856 20.7159 19.948 19.8871 19.995L19.7031 20H6.20312C5.37299 20.0001 4.5743 19.6824 3.97089 19.1123C3.36749 18.5422 3.00512 17.7628 2.95813 16.934L2.95312 16.75V8.608L12.6051 13.664C12.7125 13.7202 12.8319 13.7496 12.9531 13.7496C13.0743 13.7496 13.1937 13.7202 13.3011 13.664L22.9531 8.608ZM6.20312 4H19.7031C20.5087 3.9999 21.2856 4.299 21.8832 4.83927C22.4807 5.37954 22.8563 6.12248 22.9371 6.924L12.9531 12.154L2.96913 6.924C3.04665 6.15431 3.39617 5.43752 3.95487 4.90246C4.51358 4.36741 5.24481 4.04919 6.01713 4.005L6.20312 4Z"
                                                        fill="#00715D" />
                                                </svg>
                                            </figure>
                                            <div className="details">
                                                <p className="text">
                                                    Email Us
                                                </p>
                                                <p className="number">
                                                    iconicstyle19@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="contact-us-right">
                                        <div className="input-field">
                                            <label for="name">Name</label>
                                            <div className="input-field-inner">
                                                <figure className="input-field-inner-img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                                        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="12" width="17" height="8">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.904297 12.4961H16.7442V19.8701H0.904297V12.4961Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask0)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M8.8253 13.9961C4.5643 13.9961 2.4043 14.7281 2.4043 16.1731C2.4043 17.6311 4.5643 18.3701 8.8253 18.3701C13.0853 18.3701 15.2443 17.6381 15.2443 16.1931C15.2443 14.7351 13.0853 13.9961 8.8253 13.9961M8.8253 19.8701C6.8663 19.8701 0.904297 19.8701 0.904297 16.1731C0.904297 12.8771 5.4253 12.4961 8.8253 12.4961C10.7843 12.4961 16.7443 12.4961 16.7443 16.1931C16.7443 19.4891 12.2243 19.8701 8.8253 19.8701"
                                                                fill="#737373" />
                                                        </g>

                                                        <mask id="mask1" maskUnits="userSpaceOnUse" x="3" y="0" width="12" height="11">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51416 0H14.1342V10.6187H3.51416V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M8.82519 1.42776C6.68419 1.42776 4.94219 3.16876 4.94219 5.30976C4.93519 7.44376 6.66419 9.18376 8.79619 9.19176L8.82519 9.90576V9.19176C10.9652 9.19176 12.7062 7.44976 12.7062 5.30976C12.7062 3.16876 10.9652 1.42776 8.82519 1.42776M8.82519 10.6188H8.79319C5.87119 10.6098 3.50419 8.22676 3.51419 5.30676C3.51419 2.38176 5.89619 0 8.82519 0C11.7532 0 14.1342 2.38176 14.1342 5.30976C14.1342 8.23776 11.7532 10.6188 8.82519 10.6188"
                                                                fill="#737373" />
                                                        </g>
                                                    </svg>

                                                </figure>
                                                <input type="text" name="" id="name" placeholder="Type your name" />
                                            </div>
                                        </div>
                                        <div className="input-field">
                                            <label for="phone-number">Phone Number</label>
                                            <div className="input-field-inner">
                                                <figure className="input-field-inner-img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M16.9664 18.2183C15.012 20.1726 10.0071 18.3363 5.78757 14.1167C1.56802 9.89718 -0.268312 4.89227 1.686 2.93795L2.97277 1.65118C3.86109 0.762856 5.32484 0.786338 6.24213 1.70363L8.23522 3.69672C9.15252 4.61401 9.176 6.07776 8.28767 6.96609L8.01129 7.24247C7.53167 7.72209 7.48474 8.49581 7.9304 9.03587C8.36026 9.55679 8.8237 10.0756 9.32617 10.5781C9.82865 11.0806 10.3475 11.544 10.8684 11.9739C11.4085 12.4196 12.1822 12.3726 12.6618 11.893L12.9382 11.6166C13.8265 10.7283 15.2903 10.7518 16.2076 11.6691L18.2007 13.6622C19.118 14.5795 19.1414 16.0432 18.2531 16.9315L16.9664 18.2183Z"
                                                            stroke="#737373" strokeWidth="1.5" />
                                                    </svg>
                                                </figure>
                                                <input type="number" name="" id="phone-number" placeholder="Your phone number" />
                                            </div>
                                        </div>

                                        <div className="input-field">
                                            <label for="email">Email</label>
                                            <div className="input-field-inner">
                                                <figure className="input-field-inner-img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                                        <rect x="0.904297" y="1" width="20" height="16" rx="5" stroke="#737373" strokeWidth="1.5" />
                                                        <path d="M4.9043 6L9.7043 9.6C10.4154 10.1333 11.3932 10.1333 12.1043 9.6L16.9043 6"
                                                            stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </figure>
                                                <input type="email" name="" id="email" placeholder="Your email" />
                                            </div>
                                        </div>

                                        <div className="input-field">
                                            <label for="message">Your Message</label>
                                            <div className="input-field-inner">
                                                <textarea name="" id="message" placeholder="Type your message" cols="30" rows="3"></textarea>
                                            </div>
                                        </div>

                                        <Link href="/" className="submit-button">Submit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactUsPage;