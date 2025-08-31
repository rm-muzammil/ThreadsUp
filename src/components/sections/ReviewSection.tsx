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
import RatingStars from "../RatingStars";
import { reviews } from "@/data/reviews";

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
    <div className="overflow-hidden mt-[4rem]">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[2rem] md:text-[3rem] font-extrabold">
            OUR HAPPY CUSTOMERS
          </h2>
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
          className="w-full "
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="md:basis-[30%] transition-all duration-300"
              >
                <div
                  className={`p-3 transform transition-all min-h-[15rem] duration-300 ${
                    index === selectedIndex ||
                    index === selectedIndex - 1 ||
                    index === selectedIndex + 1
                      ? "scale-100 blur-0 z-10"
                      : "scale-100 blur-[2px] opacity-80"
                  }`}
                >
                  <Card>
                    <CardContent className="flex flex-col items-start min-h-[15rem] justify-center p-6 text-center">
                      <div className="my-2">{RatingStars(review.rating)}</div>
                      <p className="text-[1.25rem] font-bold">{review.name}</p>
                      <p className="text-sm text-left opacity-[60%] text-gray-600">
                        {review.review}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewSection;
