import { Card, CardContent } from "@mui/material";
import React from "react";
import RatingStars from "./RatingStars";

function ReviewCard({ review }: { review: any }) {
  return (
    <Card className="min-w-[20rem] rounded-2xl shadow-lg">
      <CardContent className="flex flex-col items-start min-h-[12rem]  p-6 text-center">
        <div className="my-2">{RatingStars(review.rating)}</div>
        <p className="text-[1.25rem] font-bold">{review.name}</p>
        <p className="text-sm text-left opacity-[60%] text-gray-600">
          {review.review}
        </p>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
