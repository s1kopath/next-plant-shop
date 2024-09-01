// components/ClientSideComponent.js
import React, { useState } from 'react';

const ClientSideComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Client-Side Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default ClientSideComponent;

// Example: components/ClientSideComponent.js

// Standard React Component (Client-Side by Default)
// Most React components are client-side by default, especially if they contain browser-specific code (like event listeners or direct DOM manipulation). Next.js will automatically treat these components as client-side.
