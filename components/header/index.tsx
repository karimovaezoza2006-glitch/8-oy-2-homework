"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/assets/img/logo.svg";
import location from "@/assets/img/location.svg";
import search from "@/assets/img/search.svg";
import bookmark from "@/assets/img/bookmark.svg";
import cart from "@/assets/img/cart.svg";
import user from "@/assets/img/user.svg";

const menu = [
  { name: "Materiallar va buyumlar", path: "/materials" },
  { name: "Mashina mexanizmlar", path: "/machines" },
  { name: "Qurilish ishlari", path: "/construction" },
  { name: "Kichik mexanizatsiya", path: "/mechanization" },
  { name: "Uskuna va qurilmalar", path: "/equipment" },
  { name: "Klassifikator", path: "/classifier" },
  { name: "Bo‘limlar", path: "/sections" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full text-white">
      {/* Top bar */}
      <div className="w-full bg-[#1c254b]">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2 opacity-90">
            <Image src={location} alt="Location" width={18} height={18} />
            <span>Toshkent</span>
          </div>

          <div className="flex items-center gap-4">
            <Image src={search} alt="Search" width={28} height={28} />
            <Image src={bookmark} alt="Bookmark" width={28} height={28} />
            <Image src={cart} alt="Cart" width={28} height={28} />
            <div className="flex items-center gap-1 cursor-pointer">
              <Image src={user} alt="User" width={18} height={18} />
              <span>Kirish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="w-full bg-[#23306a]">
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex items-center gap-4">
          <Image src={logo} alt="Logo" width={46} height={46} />
          <h1 className="text-[14px] font-semibold leading-[18px]">
            Qurilishda texnik me’yorlash <br />
            va standartlashtirish <br />
            ilmiy-tadqiqot instituti
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-[#2b3a78]">
        <div className="max-w-[1440px] mx-auto px-6">
          <ul className="flex gap-8 py-3 text-[14px]">
            {menu.map((item) => {
              const isActive =
                pathname === item.path ||
                pathname.startsWith(item.path + "/");

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`transition pb-1 ${
                      isActive
                        ? "text-white border-b-2 border-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
