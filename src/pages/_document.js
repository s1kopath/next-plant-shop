import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* External Stylesheets */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/bootstrap/bootstrap.min.css"
                    />
                    
                    <link
                        rel="stylesheet"
                        href="/assets/css/swiper/swiper-custom.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/css/style.css"
                    />
                </Head>
                <body>
                    {/* Load Bootstrap JS */}
                    <Script src="/assets/js/bootstrap/bootstrap.bundle.min.js" strategy="beforeInteractive" />
                    <Script src="/assets/js/main.js" strategy="lazyOnload" />

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
