"use client";

import { useEffect } from "react";

export default function GiveButterWidget({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  useEffect(() => {
    // Load Donorbox script
    const script = document.createElement("script");
    script.src =
      "https://widgets.givebutter.com/latest.umd.cjs?acct=sYraeByUy5pHEVbv&p=other";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto w-full max-w-md px-3 mb-8">
      {title && (
        <p className="text-xl font-bold mb-4 text-center font-baro text-[#7198C8]">
          {title}
        </p>
      )}
      <givebutter-widget id={id}></givebutter-widget>
      <p className="text-xs text-center  text-[#fff]">{id}</p>
    </div>
  );
}
