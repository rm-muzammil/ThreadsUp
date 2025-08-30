import React from "react";
import Container from "../Container";
import Image from "next/image";
const sections = [
  {
    id: 1,
    name: "Casual",
    image: "/images/categories/casual.png",
    imageSettings: "scale-180 -scale-x-200",
  },
  {
    id: 2,
    name: "Formal",
    image: "/images/categories/formal.png",
    imageSettings: "object-left",
  },
  {
    id: 3,
    name: "Party",
    image: "/images/categories/party.png",
    imageSettings: "",
  },
  {
    id: 4,
    name: "Gym",
    image: "/images/categories/gym.png",
    imageSettings: "",
  },
];

function CategorySection() {
  return (
    <div className="mt-[5rem]">
      <Container>
        <div className="bg-[var(--primary-background)] p-[4rem] rounded-2xl">
          <h2 className="text-center w-full mb-[2rem] text-[3rem] font-bold tracking-tighter">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`flex justify-between relative h-[18rem] rounded-2xl overflow-hidden ${
                  index === 1 || index === 2 ? "col-span-2" : ""
                }`}
              >
                <h3 className="z-10 m-[2rem] text-black text-3xl font-bold">
                  {section.name}
                </h3>
                <div>
                  <Image
                    src={section.image}
                    alt={section.name}
                    fill
                    className={`object-cover ${section.imageSettings}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategorySection;
