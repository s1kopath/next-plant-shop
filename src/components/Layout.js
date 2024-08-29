import Head from "next/head";
import Script from 'next/script';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="shortcut icon"
                    href="/assets/images/favicon_io/favicon.ico"
                    type="image/x-icon"
                />
                <title>Plantify</title>
                {/* Favicon */}
                <link
                    rel="shortcut icon"
                    href="/assets/images/logo/favicon.png"
                    type="image/svg+xml"
                />
                {/* Font Awesome */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
                {/* Swiper's CSS */}
                <link rel="stylesheet" href="/assets/css/swiper/swiper.css" />
                <link rel="stylesheet" href="/assets/css/swiper/swiper-custome.css" />
                {/* Bootstrap CSS */}
                <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.min.css" />
                {/* Custom CSS */}
                <link rel="stylesheet" href="/assets/css/style.css" />
            </Head>

            {/* Load Bootstrap JS */}
            <Script src="/assets/js/bootstrap/bootstrap.bundle.min.js" strategy="beforeInteractive" />
            {/* Load Swiper JS */}
            <Script src="/assets/js/swiper/swiper.js" strategy="lazyOnload" />
            <Script src="/assets/js/swiper/swiper-custome.js" strategy="lazyOnload" />
            {/* Load Main JS */}
            <Script src="/assets/js/main.js" strategy="lazyOnload" />

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
