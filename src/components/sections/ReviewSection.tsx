"use client";

import Container from "../Container";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ReviewSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api && api.scrollPrev();
  const scrollNext = () => api && api.scrollNext();

  return (
    <div className="">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[3rem] font-extrabold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </Container>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => {
              const diff = Math.abs(selectedIndex - index);

              let scaleClass = "scale-90 opacity-60 blur-sm"; // default
              if (diff === 0)
                scaleClass = "scale-110 opacity-100 blur-0"; // center
              else if (diff === 1)
                scaleClass = "scale-100 opacity-90 blur-0"; // near center
              else if (diff === 2) scaleClass = "scale-95 opacity-80 blur-sm"; // edge

              return (
                <CarouselItem
                  key={index}
                  className="basis-1/5 transition-all duration-300"
                >
                  <div
                    className={`p-2 transform transition-all duration-300 ${scaleClass}`}
                  >
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewSection;
