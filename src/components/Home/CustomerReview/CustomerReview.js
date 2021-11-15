import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./CustomerReview.css";
import image from "../../../images/male1.jpg";
import { set } from "react-hook-form";

const CustomerReview = () => {
  // const ClientReview = [
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  //   {
  //     name: "jack Ma",
  //     comments:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae nesciunt enim suscipit nulla quae consectetur autem tempora atque fugit! ",
  //     image: image,
  //     rating: "*****",
  //   },
  // ];

  const [ClientReview, setClientReview] = useState([]);
  console.log(ClientReview);

  useEffect(() => {
    fetch("https://infinite-wildwood-81897.herokuapp.com/ClientReview")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);

  return (
    <div className="review-container text-center">
      <h1>Customer Rrview</h1>
      <div className="row text-center d-flex justify-content-center align-items-center client-review w-75 m-auto">
        {ClientReview.map((client) => (
          <ReviewCard client={client} key={client._id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
