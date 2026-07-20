import { Footprints } from "lucide-react";
import { FaFacebookF, FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";

export const FOOTER_CONTENT = {
  brandName: "MediPed",
  brandTagline: "njega stopala",
  copyright: "© 2026 Sva prava zadržana.",
  facebookUrl: "https://facebook.com/[INSERT_FACEBOOK_PAGE]",
  instagramUrl: "https://instagram.com/[INSERT_INSTAGRAM_HANDLE]",
  viberUrl: "viber://chat?number=%2B38761566787",
  whatsappUrl: "https://wa.me/+38761566787",
};

export default function Footer() {
  const c = FOOTER_CONTENT;
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Footprints className="w-5 h-5 text-teal-400" />
            <span className="text-white font-semibold tracking-tight">
              {c.brandName}{" "}
              <span className="text-teal-400">{c.brandTagline}</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 text-center order-last sm:order-none">
            {c.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={c.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-500 hover:text-[#1877F2] transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={c.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-500 hover:text-[#E1306C] transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={c.viberUrl}
              aria-label="Viber"
              className="text-slate-500 hover:text-[#7360f2] transition-colors duration-200"
            >
              <FaViber size={20} />
            </a>
            <a
              href={c.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-slate-500 hover:text-[#25D366] transition-colors duration-200"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
