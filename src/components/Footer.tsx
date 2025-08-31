import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { siteConfig } from "@/data/siteConfig";
import { footerData } from "@/data/footerData";
import { Facebook, Home } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="h-[37rem] flex flex-col justify-between ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center relative w-full p-[1rem] md:p-[2rem] md:px-[5rem] bottom-[-50%] rounded-2xl h-[20rem] md:h-[11.25rem] bg-[var(--primary)]">
          <p className="text-[2rem] md:text-[2.5rem] text-[var(--secondary-text-color)] text-left max-w-[35rem] font-extrabold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col justify-between h-[6.7rem]">
            <Input
              className="bg-[var(--secondary)] h-[3rem] w-[21rem] rounded-4xl hover:bg-[var(--secondary-hover)]"
              placeholder="Enter your email address"
            />
            <Button className="bg-[var(--secondary)] text-[var(--primary-text-color)] h-[3rem] w-[21rem] rounded-4xl hover:bg-[var(--secondary-hover)] hover:text-[var(--secondary-text-color)]">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </Container>
      <div className="bottom-0 md:h-[31rem] bg-[var(--primary-background)]">
        <Container>
          <div className="flex flex-col gap-[2rem] md:flex-row justify-between items-start mt-[10rem]">
            <div className="flex flex-col gap-[1rem] md:max-w-[16rem]">
              <h3 className="text-[var(--primary-text-color)] text-[2rem] font-extrabold">
                {siteConfig.name}
              </h3>
              <p className="text-[var(--primary-hover)] text-[0.9rem]">
                {siteConfig.description}
              </p>
              <div className="flex gap-[1rem]">
                {footerData.socialLinks.map((link) => (
                  <div
                    key={link.name}
                    className="w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-[var(--background)] border-[2px] border-[var(--secondary-border)]"
                  >
                    <Link
                      href={link.url}
                      className="text-[var(--primary-hover)] w-[1rem] h-[1rem] flex items-center justify-center"
                    >
                      {link.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 mt-[2rem] md:mt-[0rem] md:grid-cols-5 gap-[6rem] min-w-[10rem]">
              {footerData.links.map((linkCategory) => (
                <div className="" key={linkCategory.title}>
                  <h4 className="text-[var(--primary-text-color)] text-[1rem] mb-[2rem] uppercase tracking-[0.3rem] font-semibold">
                    {linkCategory.title}
                  </h4>
                  <ul className="flex flex-col gap-[0.5rem] md:gap-[1rem] md:min-w-[10rem]">
                    {linkCategory.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          className="text-[var(--primary-hover)] text-[0.8rem] md:text-[1rem] hover:underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[var(--primary-hover)] my-[2rem]"></div>
          <div className="w-full flex justify-between min-h-[] items-center pb-[2rem]">
            <p className="text-[var(--primary-hover)] text-[1rem]">
              {siteConfig.name} &copy; {footerData.year}. All rights reserved.
            </p>
          </div>
        </Container>{" "}
      </div>
    </div>
  );
}

export default Footer;
