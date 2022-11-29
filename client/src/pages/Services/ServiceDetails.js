import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostReview from "./PostReview";
import Review from "./Review";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { _id, serviceName, imgUrl, description, price } = data;
  useEffect(() => {
    fetch(`https://roza-fusion-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((err) => console.log(err));
  }, [_id, refresh]);

  console.log(reviews);

  return (
    <div className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <div className="lg:mt-10">
          <h1 className="font-bold text-2xl lg:text-4xl font-serif my-4 lg:mb-10 text-center lg:text-left">
            {serviceName}
          </h1>
          <p className="text-md lg:text-xl w-2/3 mx-auto lg:mx-0 mb-10 text-gray-700">
            {description}
          </p>
          <p className="font-bold text-xl text-center lg:text-left">
            BDT {price}
          </p>
        </div>
      </div>


    {reviews.length>0 ? <>
      <h2 className="text-center text-2xl font-bold my-10">Customer Reviews</h2>

      <div className="w-full lg:w-1/2 mx-8 lg:mx-auto">
        {reviews?.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </>
    :
    <p className="text-center text-2xl font-bold my-8">No Reviews available for this Service</p>}
      
      <PostReview
        serviceId={_id}
        serviceName={serviceName}
        refresh={refresh}
        setRefresh={setRefresh}
      ></PostReview>
    </div>
  );
};

export default ServiceDetails;
