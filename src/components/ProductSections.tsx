"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
  category: string;
  displayLocations: string[]; // ✅ New
  priority: number; // ✅ New
}

export default function ProductSections({
  location = "home",
}: {
  location?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // ✅ Filter products for this page location
        const filteredProducts: Product[] = data.products.filter((p: Product) =>
          p.displayLocations.includes(location)
        );

        // ✅ Sort by priority
        filteredProducts.sort((a, b) => a.priority - b.priority);

        setProducts(filteredProducts);

        // ✅ Extract unique tags
        const uniqueTags: string[] = Array.from(
          new Set(filteredProducts.flatMap((p: Product) => p.tags))
        );
        setTags(uniqueTags);

        // ✅ Initialize visible count
        const initialVisible: { [key: string]: number } = {};
        uniqueTags.forEach((tag) => (initialVisible[tag] = 4));
        setVisibleCount(initialVisible);
      });
  }, [location]);

  const handleViewMore = (tag: string) => {
    setVisibleCount((prev) => ({
      ...prev,
      [tag]: prev[tag] + 4,
    }));
  };

  return (
    <div className="space-y-10 ">
      {tags.map((tag) => {
        const filteredProducts = products.filter((p) => p.tags.includes(tag));
        return (
          <div key={tag} className="space-y-4 my-[4rem]">
            <h2 className="flex justify-center text-[2rem] md:text-[3rem] font-bold uppercase tracking-tighter">
              {tag.replace("-", " ")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.slice(0, visibleCount[tag]).map((product) => (
                <Card
                  key={product.id}
                  className="shadow-md hover:shadow-lg transition max-w-[18.5rem] bg-[var(--card-bg)]"
                >
                  <CardContent className="flex flex-col items-start max-w-[18.5rem]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="rounded-md object-cover w-[18.5rem] h-[19rem]"
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="mt-2 text-[1.25rem] font-medium">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredProducts.length > visibleCount[tag] && (
              <div className="text-center mt-4">
                <Button onClick={() => handleViewMore(tag)}>View More</Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
