import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="text-blue-600 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
