import Link from "next/link";

const Header = () => {
    return (
        <header
            className="header"
            style={{
                backgroundImage: `url('/assets/images/home/Banner.jpg')`,
            }}
        >
            <div className="header-inner-nav">
                <div className="container">
                    <nav className="header-nav d-flex justify-content-between">
                        <div className="header-logo ">
                            <Link href="/">
                                <img src="/assets/images/logo/Logo.png" alt="logo" />
                            </Link>
                        </div>

                        <ul className="desktop-menu d-none d-lg-flex">
                            <li className="desktop-menu-list">
                                <Link className="desktop-menu-link menu-active" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="desktop-menu-list">
                                <Link className="desktop-menu-link" href="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="desktop-menu-list">
                                <Link className="desktop-menu-link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="desktop-menu-list">
                                <Link className="desktop-menu-link" href="/test">
                                    Test
                                </Link>
                            </li>
                        </ul>

                        <ul className="right-nav d-flex">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="23"
                                    viewBox="0 0 22 23"
                                    fill="none"
                                >
                                    <path
                                        d="M16.5 17L21 21.5"
                                        stroke="#475569"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19 10.5C19 5.52944 14.9706 1.5 10 1.5C5.02944 1.5 1 5.52944 1 10.5C1 15.4706 5.02944 19.5 10 19.5C14.9706 19.5 19 15.4706 19 10.5Z"
                                        stroke="#475569"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </li>
                            <li>
                                <Link href="/cart">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M3.87289 17.5194L2.66933 10.3398C2.48735 9.25428 2.39637 8.71152 2.68773 8.35576C2.9791 8 3.51461 8 4.58564 8H19.4144C20.4854 8 21.0209 8 21.3123 8.35576C21.6036 8.71152 21.5126 9.25428 21.3307 10.3398L20.1271 17.5194C19.7282 19.8991 19.5287 21.0889 18.7143 21.7945C17.9 22.5 16.726 22.5 14.3782 22.5H9.62182C7.27396 22.5 6.10003 22.5 5.28565 21.7945C4.47127 21.0889 4.27181 19.8991 3.87289 17.5194Z"
                                            stroke="#475569"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C8.96243 2.5 6.5 4.96243 6.5 8"
                                            stroke="#475569"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="23"
                                        viewBox="0 0 20 23"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.57757 14.9816C3.1628 15.824 -0.546635 17.5441 1.71266 19.6966C2.81631 20.748 4.04549 21.5 5.59087 21.5H14.4091C15.9545 21.5 17.1837 20.748 18.2873 19.6966C20.5466 17.5441 16.8372 15.824 15.4224 14.9816C12.1048 13.0061 7.89519 13.0061 4.57757 14.9816Z"
                                            stroke="#475569"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.5 6C14.5 8.48528 12.4853 10.5 10 10.5C7.51472 10.5 5.5 8.48528 5.5 6C5.5 3.51472 7.51472 1.5 10 1.5C12.4853 1.5 14.5 3.51472 14.5 6Z"
                                            stroke="#475569"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        <button
                            className="d-block d-lg-none mobile-menu-open"
                            data-bs-toggle="offcanvas"
                            href="#mobile-menu-offcanvas"
                            role="button"
                            aria-controls="mobile-menu-offcanvas"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 7H21"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 12H21"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 17H21"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex="-1"
                            id="mobile-menu-offcanvas"
                            aria-labelledby="offcanvasExampleLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="mobile-menu">
                                    <li className="mobile-menu-list">
                                        <Link className="mobile-menu-link menu-active" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-list">
                                        <Link className="mobile-menu-link" href="/shop">
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-list">
                                        <Link className="mobile-menu-link" href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
