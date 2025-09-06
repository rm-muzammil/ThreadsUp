import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";

function ProductCard({ product }: { product: any }) {
  return (
    <Card
      onClick={() => {
        // Navigate to product detail page
        window.location.href = `/products/${product.id}`;
      }}
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
          <h3 className="mt-2 text-[1.25rem] font-medium">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
