import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import ReviewServiceOne from "../ReviewServiceOne/ReviewServiceOne";

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  console.log(id);
  const { description, price, name, img } = details;
  useEffect(() => {
    fetch(`https://car-service-server-beta.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  useEffect(() => {
    fetch(`https://car-service-server-beta.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);
  console.log("ffffds", reviews);
  return (
    <section>
      <div className="details-container shadow-lg rounded text-white  bg-gray-700 w-full mx-auto">
        <div className="w-full">
          <img className="w-full rounded object-fill" src={img} alt="" />
        </div>
        <div className="py-10 px-5 flex flex-col justify-center">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold font-mono">
            {name}
          </h2>
          <h3 className="text-2xl font-bold">Service Fee: {price}</h3>
          <p className="text-xl py-4">{description}</p>
        </div>
      </div>
      <section>
        <div>
          {reviews.length === 0 ? (
            <p className="text-center mt-5 text-4xl text-white- font-extrabold font-mono">
              No Review Yet
            </p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5 rounded-lg ">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="rounded-lg border-2 py-5 bg-gray-700 text-white my-5 shadow-md shadow-white"
                >
                  <div className="text-center">
                    <img
                      className="w-[50px] rounded-full mx-auto"
                      src={review.image}
                      alt=""
                    />
                    <p>Name: {review.name}</p>
                    <h2>Email: {review.email}</h2>
                    <p className="">
                      <span className="font-bold">Comment</span>:{" "}
                      {review.message}
                    </p>
                    <h3>Rating: {review?.rating}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {user && user.uid ? (
        <ReviewServiceOne service={details}></ReviewServiceOne>
      ) : (
        <h1>Please Login First </h1>
      )}
    </section>
  );
};

export default Details;
