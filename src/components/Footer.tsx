import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-primary pt-20 pb-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12">

          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                <span className="text-2xl italic font-bold">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">
                  SRI RAHAMANTARA
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-widest text-accent">
                  Music Academy
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Preserving the divine heritage of Indian Classical Music through dedicated training, devotion, and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/gurus" className="hover:text-accent transition-colors">Our Gurus</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/workshops" className="hover:text-accent transition-colors">Workshops</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <button onClick={onOpenContact} className="hover:text-accent transition-colors">
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-accent shrink-0 text-base mt-0.5" />
                <span>Building No.108/4, Near Akilandeshwari Kovil,<br />North Car Street, Thiruvanaikoil,<br />Trichy - 620005, Tamil Nadu</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-accent shrink-0" />
                <a href="tel:+917411819757" className="hover:text-accent transition-colors">+91 74118 19757</a>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-accent shrink-0" />
                <span>info@srirahamantara.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-3 h-48 rounded-xl overflow-hidden border-2 border-white/10 relative">
            <iframe
              src="https://maps.google.com/maps?q=Building+No+108/4+North+Car+Street+Thiruvanaikoil+Trichy+620005&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} SRI RAHAMANTARA Music Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
