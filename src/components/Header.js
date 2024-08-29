import Link from "next/link";

const Header = () => {
    return (
        <header
            className="header"
            style={{
                backgroundImage: `url('/assets/images/home/Banner.jpg')`,
            }}
        >
            <div class="header-inner-nav">
                <div class="container">
                    <nav class="header-nav d-flex justify-content-between">
                        <div class="header-logo ">
                            <Link href="/">
                                <img src="./assets/images/logo/Logo.png" alt="logo" />
                            </Link>
                        </div>

                        <ul class="desktop-menu d-none d-lg-flex">
                            <li class="desktop-menu-list">
                                <Link class="desktop-menu-link menu-active" href="/">
                                    Home
                                </Link>
                            </li>
                            <li class="desktop-menu-list">
                                <Link class="desktop-menu-link" href="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li class="desktop-menu-list">
                                <Link class="desktop-menu-link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li class="desktop-menu-list">
                                <div class="dropdown">
                                    <div
                                        class="dropdown-toggle desktop-menu-link"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </div>
                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <Link class="dropdown-item" href="/index2">
                                                Home 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" href="/index3">
                                                Home 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <ul class="right-nav d-flex">
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
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M19 10.5C19 5.52944 14.9706 1.5 10 1.5C5.02944 1.5 1 5.52944 1 10.5C1 15.4706 5.02944 19.5 10 19.5C14.9706 19.5 19 15.4706 19 10.5Z"
                                        stroke="#475569"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
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
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C8.96243 2.5 6.5 4.96243 6.5 8"
                                            stroke="#475569"
                                            stroke-width="1.5"
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
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M14.5 6C14.5 8.48528 12.4853 10.5 10 10.5C7.51472 10.5 5.5 8.48528 5.5 6C5.5 3.51472 7.51472 1.5 10 1.5C12.4853 1.5 14.5 3.51472 14.5 6Z"
                                            stroke="#475569"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        <button
                            class="d-block d-lg-none mobile-menu-open"
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
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M3 12H21"
                                    stroke="#000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M3 17H21"
                                    stroke="#000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>

                        <div
                            class="offcanvas offcanvas-start"
                            tabindex="-1"
                            id="mobile-menu-offcanvas"
                            aria-labelledby="offcanvasExampleLabel"
                        >
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                <button
                                    type="button"
                                    class="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="mobile-menu">
                                    <li class="mobile-menu-list">
                                        <Link class="mobile-menu-link menu-active" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li class="mobile-menu-list">
                                        <Link class="mobile-menu-link" href="/shop">
                                            Shop
                                        </Link>
                                    </li>
                                    <li class="mobile-menu-list">
                                        <Link class="mobile-menu-link" href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li class="mobile-menu-list">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button
                                                        class="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Pages
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseTwo"
                                                    class="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div class="accordion-body">
                                                        <div class="mobile-menu-list">
                                                            <Link class="mobile-menu-link" href="/index2">
                                                                Home 2
                                                            </Link>
                                                        </div>
                                                        <div class="mobile-menu-list">
                                                            <Link class="mobile-menu-link" href="/index3">
                                                                Home 3
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
