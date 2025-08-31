import { topbarData } from "@/data/topbarData";
import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="text-[0.8rem] md:text-[0.9rem] flex bg-[var(--topbar-bg-color)] text-[var(--topbar-text-color)] justify-center items-center h-[2.375rem] w-full">
      {topbarData.content}{" "}
      <Link href={topbarData.link} className="underline ml-1 ">
        {topbarData.linkText}
      </Link>
    </div>
  );
}

export default Topbar;
