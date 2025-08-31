import { storeStats } from "@/data/storeStats";
import React from "react";

function StoreStats() {
  return (
    <div className="flex flex-wrap w-full justify-center gap-[2rem] md:justify-between">
      {storeStats.map((stat) => (
        <div key={stat.label}>
          <h2 className="text-[2.3rem]  font-bold">{stat.value}+</h2>
          <p className="opacity-75 text-[1rem] font-family-[var(--font-body)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StoreStats;
