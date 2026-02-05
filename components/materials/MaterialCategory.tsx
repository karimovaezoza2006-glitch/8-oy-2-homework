"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/* SVG icons (assets/img dan) */
import beton from "@/assets/img/beton.svg";
import kabel from "@/assets/img/kabel.svg";
import toldiruvchi from "@/assets/img/toldiruvchi.svg";
import metall from "@/assets/img/metall.svg";
import yogoch from "@/assets/img/yogoch.svg";
import plastmassa from "@/assets/img/plastmassa.svg";
import keramika from "@/assets/img/keramika.svg";
import izolyatsiya from "@/assets/img/izolyatsiya.svg";
import tom from "@/assets/img/tom.svg";
import qoplama from "@/assets/img/qoplama.svg";

const categories = [
  { title: "Beton va qorishmalar", icon: beton },
  { title: "Kabel mahsulotlari", icon: kabel },
  { title: "To‘ldiruvchilar", icon: toldiruvchi },
  { title: "Metall prokat buyumlar", icon: metall },
  { title: "Yog‘och material va buyumlar", icon: yogoch },
  { title: "Plastmassalar", icon: plastmassa },
  { title: "Keramika materiallari va buyumlar", icon: keramika },
  { title: "Issiqlik izolyatsiyasi va akustik materiallar", icon: izolyatsiya },
  { title: "Tom yopish va gidroizolyatsiya materiallari", icon: tom },
  { title: "Qoplamali va yopishtiruvchi materiallar va buyumlar", icon: qoplama },
];

export default function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#F7FAFC] py-12">
      <div className="max-w-[1440px] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-white rounded-xl p-5 flex items-center gap-4
                         shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F2F6FF]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>

              <p className="text-[15px] font-medium text-[#2E3A59] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
