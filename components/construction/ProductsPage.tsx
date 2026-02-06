import React from "react";

/* IMAGES */
import cement from "@/assets/img/cement.svg";
import p1 from "@/assets/img/p1.svg";
import p2 from "@/assets/img/p2.svg";
import p3 from "@/assets/img/p3.svg";
import p4 from "@/assets/img/p4.svg";
import p5 from "@/assets/img/p5.svg";
import p6 from "@/assets/img/p6.svg";
import p7 from "@/assets/img/p7.svg";
import p8 from "@/assets/img/p8.svg";
import p9 from "@/assets/img/p9.svg";
import p10 from "@/assets/img/p10.svg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const data = images.map((img, i) => ({
  id: i + 1,
  img,
  name: "COMPANY NAME",
  description: "Mahsulot haqida qisqa tavsif",
  price: "500 000 so'm",
  phone: "+998 90 900 00 00",
  weight: "5000 kg",
  date: "23.01.2023",
}));

const ProductsPage = () => {
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* TOP */}
      <div className="flex gap-6 mb-6 animate-[fadeIn_.4s_ease]">
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
          <img
            src={cement}
            alt="cement"
            className="w-40 transition duration-500 hover:scale-110 hover:rotate-2"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Portlandsement M500
          </h2>

          <p className="text-slate-600 mb-4">
            Qurilish ishlari uchun yuqori sifatli sement mahsuloti.
          </p>

          <div className="flex gap-3">
            {["Davlat qo‘mitasi", "Tovar birjasi", "Statistika"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl px-5 py-3 shadow-sm
                  hover:-translate-y-1 hover:shadow-md transition duration-300"
                >
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden animate-[fadeIn_.5s_ease]">
        <table className="w-full">
          <thead className="bg-slate-200 text-slate-700">
            <tr>
              <th className="p-3">№</th>
              <th className="p-3">Rasm</th>
              <th className="p-3">Kompaniya</th>
              <th className="p-3">Tavsif</th>
              <th className="p-3">Narx</th>
              <th className="p-3">Telefon</th>
              <th className="p-3">Miqdor</th>
              <th className="p-3">Sana</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-blue-50 transition duration-200 hover:scale-[1.01]"
              >
                <td className="p-3 text-slate-700">{item.id}</td>

                <td className="p-3">
                  <img
                    src={item.img}
                    className="w-10 transition duration-300 hover:scale-125"
                  />
                </td>

                <td className="p-3 text-blue-600 font-medium hover:underline">
                  {item.name}
                </td>

                <td className="p-3 text-slate-600">{item.description}</td>

                <td className="p-3 font-semibold text-slate-800">
                  {item.price}
                </td>

                <td className="p-3 text-blue-500">{item.phone}</td>

                <td className="p-3 text-slate-700">{item.weight}</td>

                <td className="p-3 text-slate-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            className="px-3 py-1 rounded-lg bg-white shadow
            hover:bg-blue-500 hover:text-white
            hover:scale-110 transition"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
