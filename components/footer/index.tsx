"use client";

import Image from "next/image";

/* icons */
import logo from "@/assets/img/logo.svg";
import facebook from "@/assets/img/facebook.svg";
import telegram from "@/assets/img/telegram.svg";
import youtube from "@/assets/img/youtube.svg";
import instagram from "@/assets/img/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-[#28386B] text-white pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* LEFT */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Image src={logo} alt="Logo" width={40} height={40} />
              <h3 className="text-[15px] font-semibold leading-snug">
                Qurilishda texnik me’yorlash <br />
                va standartlashtirish <br />
                ilmiy-tadqiqot instituti
              </h3>
            </div>

            <p className="text-[14px] text-white/80 mb-4 max-w-sm">
              Qurilish materiallari, mashina va mexanizmlari, ish turlari elektron portali
            </p>

            <p className="text-[14px] mb-3">
              Bizni ijtimoiy tarmoqlarda kuzating:
            </p>

            <div className="flex items-center gap-4">
              <Image src={facebook} alt="Facebook" width={20} height={20} className="cursor-pointer" />
              <Image src={telegram} alt="Telegram" width={20} height={20} className="cursor-pointer" />
              <Image src={youtube} alt="YouTube" width={20} height={20} className="cursor-pointer" />
              <Image src={instagram} alt="Instagram" width={20} height={20} className="cursor-pointer" />
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h4 className="text-[16px] font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-[14px] text-white/80">
              <li className="hover:text-white cursor-pointer">Qurilish materiallari</li>
              <li className="hover:text-white cursor-pointer">Mashina mexanizmlar</li>
              <li className="hover:text-white cursor-pointer">Qurilish ishlari</li>
              <li className="hover:text-white cursor-pointer">Korxonalar</li>
              <li className="hover:text-white cursor-pointer">Klassifikator</li>
              <li className="hover:text-white cursor-pointer">Yangiliklar</li>
              <li className="hover:text-white cursor-pointer">Aloqa</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-[16px] font-semibold mb-2">
              Yangiliklarga obuna bo‘ling!
            </h4>
            <p className="text-[14px] text-white/80 mb-4">
              Tezkor yangiliklar e-mail orqali
            </p>

            <input
              type="email"
              placeholder="Email kiriting"
              className="w-full mb-3 px-4 py-2 rounded-md text-black bg-white outline-none"
            />

            <button
              className="w-full bg-[#1E90FF] hover:bg-[#1877D8]
                         transition-colors text-white py-2 rounded-md text-[14px]"
            >
              Obuna bo‘lish
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-10 pt-4 text-[13px] text-white/70">
          All rights reserved © 2022
        </div>
      </div>
    </footer>
  );
}
