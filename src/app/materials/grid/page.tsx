"use client";

import Image from "next/image";


import p1 from "@/assets/img/product-1.svg";
import p2 from "@/assets/img/product-2.jpg";
import p3 from "@/assets/img/product-3.jpg";
import p4 from "@/assets/img/product-4.jpg";
import p5 from "@/assets/img/product-5.jpg";
import p6 from "@/assets/img/product-6.jpg";
import p7 from "@/assets/img/product-7.jpg";
import p8 from "@/assets/img/product-8.jpg";
import p9 from "@/assets/img/product-9.jpg";
import p10 from "@/assets/img/product-10.jpg";
import p11 from "@/assets/img/product-11.jpg";
import p12 from "@/assets/img/product-12.svg";
import p13 from "@/assets/img/product-13.jpg";
import p14 from "@/assets/img/product-14.jpg";
import p15 from "@/assets/img/product-15.jpg";
import p16 from "@/assets/img/product-16.jpg";

const products = [
  { img: p1, code: "KZ 02.02.01-1000", title: "Yopishtiruvchi material" },
  { img: p2, code: "KZ 02.02.01-1000", title: "Qum va to‘ldiruvchilar" },
  { img: p3, code: "KZ 02.02.01-1000", title: "Issiqlik izolyatsiya plita" },
  { img: p4, code: "KZ 02.02.01-1000", title: "Folga bilan izolyatsiya" },
  { img: p5, code: "KZ 02.02.01-1000", title: "Keramik plitka" },
  { img: p6, code: "KZ 02.02.01-1000", title: "G‘isht mahsulotlari" },
  { img: p7, code: "KZ 02.02.01-1000", title: "Gazobloklar" },
  { img: p8, code: "KZ 02.02.01-1000", title: "Quruq aralashmalar" },
  { img: p9, code: "KZ 02.02.01-1000", title: "Yog‘och taxta" },
  { img: p10, code: "KZ 02.02.01-1000", title: "Keramik plitka" },
  { img: p11, code: "KZ 02.02.01-1000", title: "Izolyatsiya plitalari" },
  { img: p12, code: "KZ 02.02.01-1000", title: "Fanera mahsulotlari" },
  { img: p13, code: "KZ 02.02.01-1000", title: "Armatura po‘lat" },
  { img: p14, code: "KZ 02.02.01-1000", title: "Profil list" },
  { img: p15, code: "KZ 02.02.01-1000", title: "Metall profil" },
  { img: p16, code: "KZ 02.02.01-1000", title: "Po‘lat burchaklar" },
];

export default function ProductsGrid() {
  return (
    <section className="bg-[#F7FAFC] py-8 sm:py-10">
      <div className="max-w-[1440px]">
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
                     lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl
                         border border-[#EEF2F7]
                         hover:border-[#3B5BDB]
                         hover:shadow-[0_8px_24px_rgba(59,91,219,0.12)]
                         transition-all duration-300"
            >
         
              <div className="relative w-full aspect-[250/180]
                              flex items-center justify-center p-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

      
              <div className="px-4 pb-4">
                <span
                  className="inline-block mb-2 text-[11px] font-medium
                             px-2 py-0.5 rounded
                             bg-[#EEF3FF] text-[#3B5BDB]"
                >
                  {item.code}
                </span>

                <p
                  className="text-[13px] sm:text-[14px]
                             text-[#2E3A59]
                             leading-snug mb-4
                             group-hover:text-[#3B5BDB]
                             transition-colors"
                >
                  {item.title}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    className="text-[12px] sm:text-[13px]
                               px-4 py-1.5
                               border border-[#3B5BDB]
                               text-[#3B5BDB]
                               rounded-md
                               hover:bg-[#3B5BDB]
                               hover:text-white
                               transition"
                  >
                    Ko‘rish
                  </button>

                  <button
                    className="w-8 h-8 flex items-center justify-center
                               border rounded-md
                               hover:bg-[#F1F5FF]
                               transition"
                    aria-label="Saqlash"
                  >
                    🔒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <div className="text-center mt-8">
          <button
            className="text-[14px] font-medium
                       text-[#3B5BDB]
                       hover:underline"
          >
            Barcha mahsulotlarni ko‘rish
          </button>
        </div>
      </div>
    </section>
  );
}
