"use client";

import Image from "next/image";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar({ isOpen, onOpenChange }: Props) {
  return (
    <>
      {isOpen && (
        <div
          className="max-sm:fixed max-sm:inset-0 max-sm:bg-black/20 max-sm:z-10
            sm:hidden"
          onClick={() => onOpenChange(!isOpen)}
        >
          关闭
        </div>
      )}
      <aside
        className={`transition-all duration-300 ease-in-out overflow-hidden w-14 lg:w-[255px] md:w-14 max-sm:w-0 h-full  border-r border-[#0505050f] dark:border-gray-700 absolute left-0 top-0 ${isOpen ? "max-sm:w-[255px]" : "max-sm:w-0"} max-sm:z-20`}
      >
        <div className="w-[30px] h-[30px]  rounded-full flex items-center justify-center">
          <Image  src="/nos.png" width={30} height={30} alt="vercel" />
        </div>
        <button onClick={() => onOpenChange(!isOpen)}>关闭</button>
      </aside>
    </>
  );
}
