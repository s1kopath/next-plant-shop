// components/Loader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div style={loaderStyle}>
            <ClipLoader color="#123abc" loading={true} size={50} />
        </div>
    );
};

const loaderStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
};

export default Loader;


// >>>>>>>>>>>>>>>>>>>>.pages/_app.js
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Loader from '../components/Loader';
// import '../styles/globals.css'; // Import your global styles

// function MyApp({ Component, pageProps }) {
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//         const handleStart = () => setLoading(true);
//         const handleComplete = () => setLoading(false);

//         router.events.on('routeChangeStart', handleStart);
//         router.events.on('routeChangeComplete', handleComplete);
//         router.events.on('routeChangeError', handleComplete);

//         return () => {
//             router.events.off('routeChangeStart', handleStart);
//             router.events.off('routeChangeComplete', handleComplete);
//             router.events.off('routeChangeError', handleComplete);
//         };
//     }, [router]);

//     return (
//         <>
//             {loading && <Loader />}
//             <Component {...pageProps} />
//         </>
//     );
// }

// export default MyApp;