import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/swiper/swiper-custom.css';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the NProgress CSS styles

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
        const handleRouteChangeStart = () => {
            NProgress.start(); // Start the progress bar
        };

        const handleRouteChangeComplete = () => {
            NProgress.done(); // Complete the progress bar
        };

        const handleRouteChangeError = () => {
            NProgress.done(); // Complete the progress bar even if there's an error
        };

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        Router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
            Router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;