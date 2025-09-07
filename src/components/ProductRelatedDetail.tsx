import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/data/reviews";

function ProductRelatedDetail() {
  const [visibleCount, setVisibleCount] = React.useState(4);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.slice(0, visibleCount).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div>
        {visibleCount < reviews.length ? (
          <div className="text-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Load More
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev - 4)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              see less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductRelatedDetail;
