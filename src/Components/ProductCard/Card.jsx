import { FaStar } from "react-icons/fa";
import Button from "../Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, price, rating, url, url2 }) => {
  const [hoverImage, setHoverImage] = useState(false);
  return (
    <>
      <div className="bg-white">
        <div className="">
          <Link to="/ProductDetails">
            <img
              className="w-56 min-h-56 max-h-56 object-cover"
              src={!hoverImage ? url : url2}
              alt={name}
              onMouseEnter={() => setHoverImage(true)}
              onMouseLeave={() => setHoverImage(false)}
            />
          </Link>
        </div>
        <div>
          <p className="py-3 text-center uppercase text-sm">{name}</p>
          <div className="flex items-center justify-center uppercase">
            <span>{price}</span>
          </div>
          <div className="my-3 flex items-center justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="me-1" />
            <span className="text-xs md:text-base">{rating} </span>{" "}
            <span className="ms-1 text-xs md:text-base">reviews</span>
          </div>
          <div className="text-center">
            <Button title="ADD TO BAG" />
          </div>
        </div>
      </div>
    </>
  );
};
