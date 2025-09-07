"use client";

import { useState } from "react";
import {
  Box,
  // Button,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Image from "next/image";
import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  colors: { name: string; image: string }[];
  sizes: string[];
}

const product: Product = {
  id: 1,
  name: "Classic T-Shirt",
  price: 29.99,
  description:
    "A classic t-shirt made from 100% cotton. Comfortable and stylish for everyday wear.",
  colors: [
    { name: "Red", image: "/images/products/p1.png" },
    { name: "Blue", image: "/images/products/p2.png" },
    { name: "Black", image: "/images/products/p3.png" },
  ],
  sizes: ["S", "M", "L", "XL"],
};

export default function ProductDetailSection() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div className="md:flex justify-between">
      <div className="flex gap-4">
        <div className="flex flex-col justify-between ">
          <Image
            className=" rounded-lg"
            src={selectedColor.image}
            alt={product.name}
            width={100}
            height={100}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <Image
            className="rounded-lg"
            src={selectedColor.image}
            alt={product.name}
            width={100}
            height={100}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <Image
            className="rounded-lg"
            src={selectedColor.image}
            alt={product.name}
            width={100}
            height={100}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
        </div>
        <Image
          className="max-h-[33rem] max-w-[27rem] rounded-lg"
          src={selectedColor.image}
          alt={product.name}
          width={500}
          height={500}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </div>
      <div className="w-[50%] p-4">
        <h1 className="text-[2.5rem] font-bold">{product.name}</h1>
        <div className="my-2">{RatingStars(4)}</div>
        <p className="text-[2rem] font-semibold">${product.price}</p>
        <p>{product.description}</p>
        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          Select Colors
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          {product.colors.map((color) => (
            <Box
              key={color.name}
              onClick={() => setSelectedColor(color)}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border:
                  selectedColor.name === color.name
                    ? "2px solid black"
                    : "1px solid #ccc",
                cursor: "pointer",
                backgroundColor: color.name.toLowerCase(),
              }}
            />
          ))}
        </Box>
        {/* Size Selector */}
        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          Size:
        </Typography>
        <ToggleButtonGroup
          value={selectedSize}
          exclusive
          onChange={(e, val: string) => val && setSelectedSize(val)}
          sx={{ mt: 1 }}
        >
          {product.sizes.map((size) => (
            <ToggleButton key={size} value={size}>
              {size}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <div className="mt-20 flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() =>
                setSelectedQuantity((prev) => Math.max(prev - 1, 1))
              }
            >
              -
            </button>
            <p>{selectedQuantity} </p>
            <button onClick={() => setSelectedQuantity((prev) => prev + 1)}>
              +
            </button>
          </div>

          <Button
            className="w-[25rem] rounded-4xl cursor-pointer bg-[var(--secondary-background)]"
            // color="primary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
