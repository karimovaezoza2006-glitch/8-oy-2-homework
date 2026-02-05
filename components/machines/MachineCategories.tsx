"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/* icons */
import qazish from "@/assets/img/qazish.svg";
import qozig from "@/assets/img/qozig.svg";
import tunnel from "@/assets/img/tunnel.svg";
import burgulash from "@/assets/img/burgulash.svg";
import kran from "@/assets/img/kran.svg";
import yuk from "@/assets/img/yuk.svg";
import beton from "@/assets/img/beton.svg";
import yol from "@/assets/img/yol.svg";
import temiryol from "@/assets/img/temiryol.svg";
import magistral from "@/assets/img/magistral.svg";
import aloqa from "@/assets/img/aloqa.svg";
import suv from "@/assets/img/suv.svg";
import transport from "@/assets/img/transport.svg";
import materialTashish from "@/assets/img/material-tashish.svg";
import traktor from "@/assets/img/traktor.svg";
import payvand from "@/assets/img/payvand.svg";
import nasos from "@/assets/img/nasos.svg";
import kema from "@/assets/img/kema.svg";

const machines = [
  { title: "Qazish mashinalari", icon: qazish },
  { title: "Qozig‘ va truba ishlari uchun mashinalar va agregatlar", icon: qozig },
  { title: "Tunnel va kon qazish mashinalari", icon: tunnel },
  { title: "Burg‘ulash mashinalari va agregatlari", icon: burgulash },
  { title: "Kranlar", icon: kran },
  { title: "Yuk ko‘tarish va tashish mashinalari", icon: yuk },
  { title: "Beton qorishmani tayyorlash, uzatish va yotqizish mashinalari", icon: beton },
  { title: "Yo‘l va aerodrom qurilishi uchun mashinalar", icon: yol },
  { title: "Temir yo‘l qurilishi mashinalari", icon: temiryol },
  { title: "Magistral quvurlarni qurish uchun mashinalar", icon: magistral },
  { title: "Aloqa liniyalari va elektr uzatish inshootlari uchun mashinalar", icon: aloqa },
  { title: "Suv xo‘jaligi qurilishi uchun mashinalar", icon: suv },
  { title: "Maxsus transport vositalari", icon: transport },
  { title: "Qurilish materiallarini tashish vositalari", icon: materialTashish },
  { title: "Traktorlar, traktor tirkamalari", icon: traktor },
  { title: "Bo‘g‘inlarni payvandlash va nazorat qilish moslamalari", icon: payvand },
  { title: "Nasoslar, nasos stantsiyalari, sovitish va muzlatish", icon: nasos },
  { title: "Kemalar, suv osti texnik ishlari uchun suzuvchi mashinalar", icon: kema },
];

export default function MachineCategories() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-[#F7FAFC] py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {machines.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F2F6FF]">
                <Image src={item.icon} alt={item.title} width={28} height={28} />
              </div>

              <p className="text-[14px] font-medium text-[#2E3A59] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
