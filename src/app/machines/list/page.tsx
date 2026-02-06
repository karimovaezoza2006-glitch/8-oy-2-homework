"use client";

import { motion } from "framer-motion";

type Item = {
  code: string;
  title: string;
};

const items: Item[] = Array.from({ length: 16 }).map((_, i) => ({
  code: "#02.02.02.01-1000",
  title:
    i % 2 === 0
      ? "Удаляемый герметизирующий компаунд для повторного сращивания кабеля"
      : "Изделия с армирующими материалами на основе стеклоткани, пришитыми к стеклоизоляционному слою марки",
}));


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function MostViewedList() {
  return (
    <section className="bg-[#F7FAFC] py-6 sm:py-8 lg:py-10">
      <div className="max-w-[1440px]">
   
        <h2 className="text-[14px] sm:text-[15px] font-semibold
                       text-[#1F2937] mb-4 sm:mb-5 uppercase">
          Ko‘p ko‘rilganlar
        </h2>

       
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group bg-white rounded-xl
                         px-4 py-4 sm:px-5
                         border border-[#EEF2F7]
                         hover:border-blue-200
                         hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]
                         transition-all"
            >
              <div className="flex items-start justify-between gap-3">
          
                <div>
                  <span className="inline-block text-[11px] sm:text-[12px]
                                   font-medium text-blue-600 bg-blue-50
                                   px-2 py-0.5 rounded">
                    {item.code}
                  </span>

                  <p className="mt-2 text-[14px] sm:text-[15px]
                                text-[#1F2937] leading-snug
                                group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </p>
                </div>

           
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="shrink-0 mt-1
                             text-blue-600 hover:text-blue-700"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <div className="mt-6 sm:mt-8 text-center">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-[13px] sm:text-[14px]
                       font-medium text-blue-600
                       hover:text-blue-700 hover:underline"
          >
            Barcha mahsulotlarni ko‘rish
          </motion.button>
        </div>
      </div>
    </section>
  );
}
