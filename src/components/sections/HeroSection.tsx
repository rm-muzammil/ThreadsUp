import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import StoreStats from "../StoreStats";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="bg-[var(--heroSection-bg-color)]">
      <Container>
        <div className="md:h-[42rem] md:flex justify-between items-center ">
          <div className="md:max-w-[45%] space-y-6">
            <h1 className="text-[2.2rem] pt-[1rem] md:text-[4rem] font-extrabold font-family-[var(--font-heading)] leading-[0.9]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[0.8rem] md:text-[1rem] opacity-75 font-family-[var(--font-body)]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button className="w-full md:w-[13rem] rounded-full py-6 px-10">
              Shop Now
            </Button>
            <StoreStats />
          </div>
          <div className="relative  md:w-[45%] h-[30rem] md:h-[42rem]">
            <Image
              //   className="h-full"
              src="/images/banners/heroSection.jpg"
              alt="Description of image"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
