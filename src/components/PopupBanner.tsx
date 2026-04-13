import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export const PopupBanner: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [, setLocation] = useLocation();

    // Show popup once
    useEffect(() => {
        const seen = sessionStorage.getItem("popupShown");

        if (!seen) {
            const timer = setTimeout(() => {
                setOpen(true);
                sessionStorage.setItem("popupShown", "true");
            }, 800);

            return () => clearTimeout(timer);
        }
    }, []);

    // ESC key close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const handleRedirect = () => {
        setOpen(false);
        setLocation("/workshops");
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden cursor-pointer group"
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.stopPropagation();
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div onClick={handleRedirect}>
                            <img
                                src="/images/banner/popup-banner.jpeg"
                                alt="Workshop Banner"
                                className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};