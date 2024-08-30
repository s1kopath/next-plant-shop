import Layout from "@/components/Layout";
import Link from "next/link";

const OrderSuccessPage = () => {
    return (
        <Layout>
            h2
            <section>
                <div className="order-successfully-section">
                    <div className="container">
                        <div className="order-successfully-section-inner">
                            <figure className="successfull-img">
                                <img src="/assets/images/order-successfully/order-successfully-image.png" alt="" />
                            </figure>

                            <h3 className="title">
                                Order Placed Successfully!
                            </h3>
                            <p className="details">
                                You have successfully place your Order. You will get notified by your Phone and email.
                            </p>
                            <div className="">
                                <Link href="/" className="primary-button">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default OrderSuccessPage;