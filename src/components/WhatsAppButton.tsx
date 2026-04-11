import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+919047953210"; // +91 74118 19757
const WHATSAPP_MESSAGE = "Hello! I'm interested in learning more about Sri Rahamandara Music Academy.";

export function WhatsAppButton() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </motion.a>
    );
}
