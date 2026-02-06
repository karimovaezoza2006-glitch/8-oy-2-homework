"use client";

import Image from "next/image";

import p1 from "@/assets/img/card1.png";
import p2 from "@/assets/img/card2.png";
import p3 from "@/assets/img/card3.png";
import p4 from "@/assets/img/card4.png";
import p5 from "@/assets/img/card5.png";
import p6 from "@/assets/img/card6.png";
import p7 from "@/assets/img/card7.png";
import p8 from "@/assets/img/card8.png";
import p9 from "@/assets/img/card9.png";
import p10 from "@/assets/img/card10.png";
import p11 from "@/assets/img/card11.png";
import p12 from "@/assets/img/card12.png";
import p13 from "@/assets/img/card13.png";
import p14 from "@/assets/img/card14.png";
import p15 from "@/assets/img/card15.png";
import p16 from "@/assets/img/card16.png";

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
    <section className="bg-[#F7FAFC] py-10">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-xl border border-[#EEF2F7]
                hover:border-[#3B5BDB]
                hover:shadow-lg
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[170px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <span className="inline-block text-[11px] font-medium px-2 py-1 rounded bg-[#EEF3FF] text-[#3B5BDB] mb-2">
                  {item.code}
                </span>

                <p
                  className="
                    text-[14px] text-[#2E3A59]
                    leading-snug mb-4
                    line-clamp-2
                    group-hover:text-[#3B5BDB]
                    transition
                  "
                >
                  {item.title}
                </p>

                {/* ACTIONS */}
                <div className="flex items-center justify-between">
                  <button
                    className="
                      px-4 py-1.5 text-[13px]
                      border border-[#3B5BDB]
                      text-[#3B5BDB]
                      rounded-md
                      hover:bg-[#3B5BDB]
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    Ko‘rish
                  </button>

                  <button
                    className="
                      w-8 h-8 flex items-center justify-center
                      border rounded-md
                      hover:bg-[#F1F5FF]
                      transition
                    "
                  >
                    🔒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="text-center mt-10">
          <button className="text-[14px] font-medium text-[#3B5BDB] hover:underline">
            Barcha mahsulotlarni ko‘rish
          </button>
        </div>
      </div>
    </section>
  );
}
