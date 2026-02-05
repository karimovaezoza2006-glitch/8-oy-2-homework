"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import gridIcon from "@/assets/img/grid.png";
import listIcon from "@/assets/img/list.png";
import cardIcon from "@/assets/img/card.png";

const pages = [
  {
    href: "/materials/slug",
    icon: cardIcon,
    alt: "Card view",
  },
  {
    href: "/materials/grid",
    icon: gridIcon,
    alt: "Grid view",
  },
  {
    href: "/materials/list",
    icon: listIcon,
    alt: "List view",
  },
];

export default function MaterialPages() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 mb-6">
      {pages.map((page, index) => {
        const isActive = pathname === page.href;

        return (
          <Link
            key={index}
            href={page.href}
            className={`
              w-9 h-9 flex items-center justify-center
              rounded-lg border
              transition-all duration-200
              cursor-pointer
              ${
                isActive
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-400"
              }
            `}
          >
            <Image
              src={page.icon}
              alt={page.alt}
              width={18}
              height={18}
              className={isActive ? "invert brightness-0" : ""}
            />
          </Link>
        );
      })}
    </div>
  );
}
