import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Plantify</title>
                {/* Favicon */}
                <link
                    rel="shortcut icon"
                    href="/assets/images/favicon_io/favicon.ico"
                    type="image/x-icon"
                />
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
