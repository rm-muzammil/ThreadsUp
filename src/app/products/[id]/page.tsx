// <<<<<<< HEAD
// import { products } from "@/data/products";
// import Image from "next/image";

// interface Props {
//   params: { id: string };
// }

// export default function ProductDetail({ params }: Props) {
//   const product = products.find((item) => item.id === params.id);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 mt-10">Product not found</div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10">
//       <div className="flex flex-col md:flex-row gap-10">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={400}
//           height={300}
//           className="rounded-lg"
//         />
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-gray-600 mb-4">{product.description}</p>
//           <p className="text-2xl font-semibold mb-4">${product.price}</p>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// =======
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
