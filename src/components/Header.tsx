"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="text-center mb-12 py-7 bg-[#1a1a1a] text-4xl font-bold text-[#7198C8] text-center font-baro">
      <Image
        src="/logo.png"
        alt="Whitman Music Boosters"
        width={720}
        height={300}
        className="mx-auto h-38 w-auto"
      />
    </div>
  );
}
