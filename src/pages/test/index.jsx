import Layout from "@/components/Layout";
import ClientOnlyComponent from "@/components/test/ClientOnlyComponent";
import ClientSideComponent from "@/components/test/ClientSideComponent";
import DynamicClientComponent from "@/components/test/DynamicClientComponent";

export default function Page() {
    return (
        <Layout>
            <div className="text">
            <div>
                this is test page
            </div>
            <br />
            <br />
            <br />

            <ClientSideComponent />

            <br />
            <br />
            <br />
            <ClientOnlyComponent />

            <br />
            <br />
            <br />
            <DynamicClientComponent />
            </div>
        </Layout>
    );
}