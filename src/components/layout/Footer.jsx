"use client";
import { Link } from "../../router/Link";
import { Container } from "../common/Container";
import { Mail } from "lucide-react";
import { toBanglaNumber } from "../../utils/banglaUtils";
import {
  FaFacebookF,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import Logo from "../common/Logo";
export const Footer = () => {
  const currentYear = /* @__PURE__ */ new Date().getFullYear();
  const banglaYear = toBanglaNumber(currentYear);
  return (
    <footer
      className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 mt-12"
      id="cricfot-footer"
    >
      <Container size="wide" className="py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-neutral-800">
          {/* 1. CricFot Brand & Identity */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <Logo />
            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
              বাংলাদেশের ক্রিকেট ও ফুটবলের সর্বশেষ খবর, বিশ্লেষণ ও লাইভ ম্যাচ
              আপডেট।
            </p>
            {/* <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xs mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>স্বাধীন ডিজিটাল স্পোর্টস সংবাদপত্র • ঢাকা, বাংলাদেশ</span>
            </div> */}

            {/* Social Links  */}
            <div className="mt-4">
              {" "}
              <span className="text-xs font-semibold text-white block my-4">
                সোশ্যাল মিডিয়ায় যুক্ত থাকুন:
              </span>{" "}
              <div className="flex items-center gap-2">
                {/* Facebook Page */}
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="ফেসবুক পেজ"
                  title="Facebook"
                >
                  <FaFacebookF size={14} />
                </Link>
                {/* Facebook Group */}
                <Link
                  href="https://www.facebook.com/groups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="ফেসবুক গ্রুপ"
                  title="Facebook Group"
                >
                  <FaFacebook size={14} />
                </Link>
                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="ইউটিউব"
                  title="YouTube"
                >
                  <FaYoutube size={15} />
                </Link>
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="ইনস্টাগ্রাম"
                  title="Instagram"
                >
                  <FaInstagram size={15} />
                </Link>
                {/* WhatsApp */}
                <Link
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="হোয়াটসঅ্যাপ"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={15} />
                </Link>
                {/* Telegram */}
                <Link
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="টেলিগ্রাম"
                  title="Telegram"
                >
                  <FaTelegramPlane size={15} />
                </Link>
                {/* Google News */}
                <Link
                  href="https://news.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="গুগল নিউজ"
                  title="Google News"
                >
                  <SiGooglenews size={15} />
                </Link>
                {/* TikTok */}
                <Link
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white rounded-xs transition-colors"
                  aria-label="টিকটক"
                  title="TikTok"
                >
                  <FaTiktok size={14} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {/* Phone */}

                <Link
                  href="tel:+8801861720669"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  aria-label="কল করুন"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  <span>+880 1861720669</span>
                </Link>

                <Link
                  href="mailto:cricfot@gmail.com"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  aria-label="ইমেইল করুন"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>cricfot@gmail.com</span>
                </Link>

                <Link
                  href="https://wa.me/8801861720669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  aria-label="WhatsApp-এ যোগাযোগ করুন"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2 mb-3">
              নেভিগেশন
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  সর্বশেষ
                </Link>
              </li>
              <li>
                <Link
                  href="/cricket"
                  className="hover:text-white transition-colors"
                >
                  ক্রিকেট
                </Link>
              </li>
              <li>
                <Link
                  href="/football"
                  className="hover:text-white transition-colors"
                >
                  ফুটবল
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/live"
                  className="hover:text-white transition-colors"
                >
                  লাইভ স্কোর
                </Link>
              </li> */}
              <li>
                <Link
                  href="/matches"
                  className="hover:text-white transition-colors"
                >
                  ম্যাচ সূচি
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="hover:text-white transition-colors"
                >
                  ফলাফল
                </Link>
              </li>
              <li>
                <Link
                  href="/analysis"
                  className="hover:text-white transition-colors"
                >
                  বিশ্লেষণ
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-white transition-colors"
                >
                  ভিডিও
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Sport Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2 mb-3">
              খেলার বিভাগ
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans">
              <li>
                <Link
                  href="/cricket"
                  className="hover:text-white transition-colors"
                >
                  বাংলাদেশ জাতীয় দল (টাইগার্স)
                </Link>
              </li>
              <li>
                <Link
                  href="/cricket"
                  className="hover:text-white transition-colors"
                >
                  বিপিএল ২০২৬ (BPL)
                </Link>
              </li>
              <li>
                <Link
                  href="/cricket"
                  className="hover:text-white transition-colors"
                >
                  আইসিসি ও বিশ্ব টেস্ট চ্যাম্পিয়নশিপ
                </Link>
              </li>
              <li>
                <Link
                  href="/football"
                  className="hover:text-white transition-colors"
                >
                  বাংলাদেশ ফুটবল (বাফুফে)
                </Link>
              </li>
              <li>
                <Link
                  href="/football"
                  className="hover:text-white transition-colors"
                >
                  ইংলিশ প্রিমিয়ার লিগ
                </Link>
              </li>
              <li>
                <Link
                  href="/football"
                  className="hover:text-white transition-colors"
                >
                  উয়েফা চ্যাম্পিয়ন্স লিগ
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Information & Editorial Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2 mb-3">
              তথ্য ও নীতিমালা
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans">
              <li>
                <a
                  href="#about"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a
                  href="#editorial"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  সম্পাদকীয় নীতিমালা
                </a>
              </li>
              <li>
                <a
                  href="#corrections"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  সংশোধনী নীতিমালা
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  ব্যবহারের শর্তাবলী
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3 font-sans">
          <p>
            © {banglaYear} ক্রিকফুট মিডিয়া নেটওয়ার্ক। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className=" text-[11px]">
            <Link
              href="https://www.mohyminulislam.com"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              Develop by Mohyminul Islam
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
