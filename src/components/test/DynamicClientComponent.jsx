// components/DynamicClientComponent.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./ClientSideComponent'), {
    ssr: false, // This component will only be rendered on the client
});

const PageWithDynamicClientComponent = () => {
    return (
        <div>
            <h1>Page with Client-Side Component</h1>
            <DynamicComponent />
        </div>
    );
};

export default PageWithDynamicClientComponent;