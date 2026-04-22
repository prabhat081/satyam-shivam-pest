// components/Loader.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (

        <div className="preloader">
            <div className="loading-container">
                <div className="loading" />
                <div id="loading-icon">
                    <img src="/images/loader.svg" alt="" />
                </div>
            </div>
        </div>

    );
}
