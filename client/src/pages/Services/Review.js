import { Card } from "flowbite-react";
import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { customerReview, reviewerName, reviewerPhoto } = review;
  // const{}
  return (
    <Card className="mb-4">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {customerReview}
      </h5>
      <div className="flex items-center">
        <img src={reviewerPhoto} className="w-12 h-12 rounded-full" alt="" />
        <p className="text-gray-700 dark:text-gray-400 ml-4 text-xl font-bold">
          {reviewerName}
        </p>
      </div>
    </Card>
  );
};

export default Review;
