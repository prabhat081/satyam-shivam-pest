"use client";

import { motion } from "framer-motion";

const FloatingContactButtons = () => {
    return (
        <div className="floating-contact-wrapper">

            {/* WhatsApp */}
            <motion.a
                href="https://wa.me/919693033824"
                target="_blank"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="floating-btn whatsapp"
            >
                <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
                    <path d="M16 3C9.4 3 4 8.4 4 15c0 2.2.6 4.3 1.7 6.1L4 29l8-1.6c1.8 1 3.9 1.6 6 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3z" />
                </svg>
            </motion.a>

            {/* Call */}
            <motion.a
                href="tel:+919693033824"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
                className="floating-btn call"
            >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                    <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.3 11.4 11.4 0 003.6.6 1 1 0 011 1V21a1 1 0 01-1 1C10 22 2 14 2 4a1 1 0 011-1h3.6a1 1 0 011 1c0 1.2.2 2.4.6 3.6a1 1 0 01-.3 1L6.6 10.8z" />
                </svg>
            </motion.a>

        </div>
    );
};

export default FloatingContactButtons;
