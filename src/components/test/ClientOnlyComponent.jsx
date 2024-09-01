// components/ClientOnlyComponent.js
import React, { useState, useEffect } from 'react';

const ClientOnlyComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Code here will only run on the client
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing until it's confirmed to be client-side
    }

    return (
        <div>
            <h2 className='text-success'>This is a client-side only component</h2>
            <p>Local storage value: {localStorage.getItem('key')}</p>
        </div>
    );
};

export default ClientOnlyComponent;