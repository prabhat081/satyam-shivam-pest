'use client';

import Script from 'next/script';

export default function PluginScripts() {
    return (
        <>
            {/* ✅ jQuery FIRST */}
            <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

            {/* ✅ Core Plugins */}
            <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
            <Script src="/js/validator.min.js" strategy="beforeInteractive" />
            <Script src="/js/jquery.slicknav.js" strategy="beforeInteractive" />
            <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />

            {/* ✅ Counter dependencies */}
            <Script src="/js/jquery.waypoints.min.js" strategy="beforeInteractive" />
            <Script src="/js/jquery.counterup.min.js" strategy="beforeInteractive" />

            {/* ✅ WOW FIX (IMPORTANT) */}
            <Script src="/js/wow.min.js" strategy="beforeInteractive" />

            {/* ✅ Other plugins */}
            <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
            <Script src="/js/SmoothScroll.js" strategy="beforeInteractive" />
            <Script src="/js/parallaxie.js" strategy="beforeInteractive" />
            <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
            <Script src="/js/magiccursor.js" strategy="beforeInteractive" />
            <Script src="/js/SplitText.min.js" strategy="beforeInteractive" />
            <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
            <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="beforeInteractive" />

            {/* ✅ MAIN JS (LAST) */}
            <Script src="/js/function.js" strategy="afterInteractive" />
        </>
    );
}
