"use client";
import ProductCard from "@/components/ProductCard";
import React, { useEffect } from "react";

function page() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default page;
