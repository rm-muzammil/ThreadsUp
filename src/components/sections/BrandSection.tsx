import React from "react";
import Container from "../Container";
import { brands } from "@/data/brands";
import Image from "next/image";

function BrandSection() {
  return (
    <div className="bg-[var(--secondary-background)]">
      <Container>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
          {brands.map((brand, index) => (
            <div className={`relative`} key={brand.name}>
              <Image
                className="object-contain md:w-[10rem]"
                fill
                src={brand.src}
                alt={brand.name}
              />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BrandSection;
