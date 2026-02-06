"use client";

import { useState } from "react";
import { ChevronDown, Bookmark } from "lucide-react";

const categories = [
  "Категория 01 — Материалы для строительных дорожных работ",
  "Категория 02 — Щебень, гравий, песок",
  "Категория 03 — Цемент, гипс, известь",
  "Категория 04 — Сухие смеси",
  "Категория 05 — Бетон и изделия",
  "Категория 06 — Керамика",
  "Категория 07 — Металлоконструкции",
  "Категория 08 — Металлопрокат",
  "Категория 09 — Кабели",
  "Категория 10 — Пластмассы",
];

const tableData = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  code: "01.07.10.01-0001",
  name: "Глина скульптурная",
  unit: "10 рулонов",
}));

export default function ClassificatorPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[#F5F7FB] min-h-screen p-6 text-[#2E3A59]">
      {/* TITLE */}
      <h1 className="text-center text-[20px] font-semibold mb-6">
        QURILISH <span className="text-[#3B5BDB]">RESURSLARI</span> KLASSIFIKATORI
      </h1>

      {/* SEARCH */}
      <div className="max-w-[1200px] mx-auto mb-6">
        <input
          placeholder="Kerakli mahsulot nomini yozing"
          className="w-full h-11 px-4 rounded-lg border border-[#E2E8F0]
                     bg-white text-[#2E3A59]
                     focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <div className="col-span-4 bg-[#EDF2FF] rounded-xl border border-[#DCE4FF] p-3">
          {categories.map((cat, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center
                           text-left text-[13px] py-3
                           text-[#2E3A59]
                           hover:text-[#3B5BDB]
                           transition"
              >
                {cat}

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 text-[#3B5BDB] ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-40 pb-2" : "max-h-0"
                }`}
              >
                <div className="pl-3 text-[12px] text-gray-600">
                  Resurslar ro‘yxati
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="col-span-8 bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-[13px] text-[#2E3A59]">
            <thead className="bg-[#F1F5F9]">
              <tr>
                <th className="p-3 text-left">№</th>
                <th className="p-3 text-left">Resurs kodi</th>
                <th className="p-3 text-left">Resurs nomi</th>
                <th className="p-3 text-left">O‘lchov birligi</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className="border-t hover:bg-[#F8FAFF] transition"
                >
                  <td className="p-3">{row.id}</td>
                  <td className="p-3">{row.code}</td>
                  <td className="p-3 font-medium">{row.name}</td>
                  <td className="p-3">{row.unit}</td>
                  <td className="p-3">
                    <Bookmark
                      size={18}
                      className="cursor-pointer text-[#3B5BDB]
                                 hover:scale-110 transition"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
