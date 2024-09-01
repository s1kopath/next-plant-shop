import Link from 'next/link';
import Layout from '../../components/Layout';

const CartPage = () => {
    return (
        <Layout>
            <section>
                <div className="cart-section">
                    <div className="container">
                        <div className="cart-section-inner">
                            <nav className="breadcrumb-nav my-4">
                                <ol className="breadcrumbOl">
                                    <li className="breadcrumbItem">
                                        <Link href="/">Home</Link>
                                        <span> {'>'} </span>
                                    </li>
                                    <li className="breadcrumbItem">My Cart</li>
                                </ol>
                            </nav>

                            {/* <!-- My Cart --> */}

                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <h1 className="my-cart">
                                        My Cart
                                    </h1>
                                    <div className="cart-details">
                                        <div className="row g-3">
                                            <div className="col-6 col-md-5 align-self-center">
                                                <div className="cart-image-title">
                                                    <figure className="cart-image">
                                                        <img src="/assets/images/cart/cart2.png" alt="cart" />
                                                    </figure>
                                                    <h3 className="cart-title line-clamp1">
                                                        Plant for Home lorem
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="price-section">
                                                    <p className="price">25 $</p>
                                                    <p className="discount-price">35 $</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 align-self-center">
                                                <div className="product-quantity">
                                                    <button className="decrement-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                    <p className="quantity">01</p>
                                                    <button className="increment-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10.6575 2.29163C11.2328 2.29163 11.6992 2.75799 11.6992 3.33329V16.6666C11.6992 17.242 11.2328 17.7083 10.6575 17.7083C10.0822 17.7083 9.61584 17.242 9.61584 16.6666V3.33329C9.61584 2.75799 10.0822 2.29163 10.6575 2.29163Z"
                                                                fill="#64748B" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="delete-btn-inner">
                                                    <button className="delate-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none">
                                                            <path
                                                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M9.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M14.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-details">
                                        <div className="row g-3">
                                            <div className="col-6 col-md-5 align-self-center">
                                                <div className="cart-image-title">
                                                    <figure className="cart-image">
                                                        <img src="/assets/images/cart/cart2.png" alt="cart" />
                                                    </figure>
                                                    <h3 className="cart-title line-clamp1">
                                                        Plant for Home lorem
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="price-section">
                                                    <p className="price">25 $</p>
                                                    <p className="discount-price">35 $</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 align-self-center">
                                                <div className="product-quantity">
                                                    <button className="decrement-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                    <p className="quantity">01</p>
                                                    <button className="increment-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10.6575 2.29163C11.2328 2.29163 11.6992 2.75799 11.6992 3.33329V16.6666C11.6992 17.242 11.2328 17.7083 10.6575 17.7083C10.0822 17.7083 9.61584 17.242 9.61584 16.6666V3.33329C9.61584 2.75799 10.0822 2.29163 10.6575 2.29163Z"
                                                                fill="#64748B" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="delete-btn-inner">
                                                    <button className="delate-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none">
                                                            <path
                                                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M9.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M14.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-details">
                                        <div className="row g-3">
                                            <div className="col-6 col-md-5 align-self-center">
                                                <div className="cart-image-title">
                                                    <figure className="cart-image">
                                                        <img src="/assets/images/cart/cart2.png" alt="cart" />
                                                    </figure>
                                                    <h3 className="cart-title line-clamp1">
                                                        Plant for Home lorem
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="price-section">
                                                    <p className="price">25 $</p>
                                                    <p className="discount-price">35 $</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 align-self-center">
                                                <div className="product-quantity">
                                                    <button className="decrement-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                    <p className="quantity">01</p>
                                                    <button className="increment-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10.6575 2.29163C11.2328 2.29163 11.6992 2.75799 11.6992 3.33329V16.6666C11.6992 17.242 11.2328 17.7083 10.6575 17.7083C10.0822 17.7083 9.61584 17.242 9.61584 16.6666V3.33329C9.61584 2.75799 10.0822 2.29163 10.6575 2.29163Z"
                                                                fill="#64748B" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M2.9491 10C2.9491 9.42471 3.41546 8.95837 3.99076 8.95837H17.3241C17.8994 8.95837 18.3658 9.42471 18.3658 10C18.3658 10.5754 17.8994 11.0417 17.3241 11.0417H3.99076C3.41546 11.0417 2.9491 10.5754 2.9491 10Z"
                                                                fill="#64748B" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-2 align-self-center">
                                                <div className="delete-btn-inner">
                                                    <button className="delate-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                            fill="none">
                                                            <path
                                                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                                                stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M9.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M14.5 16.5V10.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div className="order-summery">
                                        <h3 className="title">
                                            Order Summary
                                        </h3>

                                        <div className="order-summery-content">
                                            <p className="order-title">Sub total ( 3 items )</p>
                                            <p className="price">$50</p>
                                        </div>
                                        <div className="order-summery-content">
                                            <p className="order-title">Shipping Fee</p>
                                            <p className="price">$5</p>
                                        </div>
                                        <div className="order-summery-content">
                                            <p className="order-title">Coupon code</p>
                                            <input className="coupon-input" type="text" placeholder="type code" />
                                        </div>
                                        <div className="order-summery-content">
                                            <p className="order-title">Discount</p>
                                            <p className="price">$0</p>
                                        </div>
                                        <div className="order-summery-total">
                                            <p className="total-text">Total</p>
                                            <p className="total-price">$55 </p>
                                        </div>

                                        <Link href="/checkout/order-successful" className="submit-button mt-3">
                                            Process to Checkout
                                        </Link>
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

export default CartPage;