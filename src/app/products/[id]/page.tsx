"use client";
import Container from "@/components/Container";
import ProductRelatedDetail from "@/components/ProductRelatedDetail";
import ProductSections from "@/components/ProductSections";
import ProductDetailSection from "@/components/sections/productDetail/ProductDetailSection";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [product, setProduct] = useState<any>(null);
  const params = useParams();
  const id = parseInt(params.id as string, 10);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // If products is an array with ids
        const found = data.products.find((p: any) => p.id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <Container>
      <ProductDetailSection />
      <ProductRelatedDetail />
      <ProductSections />
    </Container>
  );
}

export default Page;
