import { Star } from "lucide-react";
import React from "react";

function RatingStars(rating: number) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default RatingStars;
