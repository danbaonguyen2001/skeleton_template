import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const Card = () => {
  return (
    <div className="w-full max-w-[400px] p-5 rounded-xl shadow-sm">
      <div className="card__image h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/userupload/4209030/file/original-631ecf1386401fa7975ed38c82d838a4.jpg?compress=1&resize=1024x768"
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title text-xl font-bold mb-4">Merry Christmas</h3>
        <p className="card_desc text-sm mb-5 ">
          We are available for a new project. Contact us! Check out our Website,
          Behance, Instagram
        </p>
        <a
          href="/#"
          className="card_link block text-center p-3 bg-green-500 rounded-xl text-white hover: cursor-pointer hover:opacity-80"
        >
          See details
        </a>
      </div>
    </div>
  );
};
const Loading = () => {
  return (
    <div className="w-full max-w-[400px] p-5 rounded-xl shadow-sm">
      <div className="card__image h-[250px] mb-5">
        <LoadingSkeleton className="w-full h-full"></LoadingSkeleton>
      </div>
      <div className="card__content">
        <h3 className="card__title text-xl font-bold mb-4">
          <LoadingSkeleton className="w-full h-[16px] mb-1"></LoadingSkeleton>
          <LoadingSkeleton className="w-full h-[16px]"></LoadingSkeleton>
        </h3>
        <p className="card_desc text-sm mb-5 ">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <LoadingSkeleton
                className="w-full h-[10px] mb-1 last:mb-0"
                key={index}
              ></LoadingSkeleton>
            ))}
        </p>

        <LoadingSkeleton className="w-full h-[64px] mb-1 rounded-xl"></LoadingSkeleton>
      </div>
    </div>
  );
};

Card.Loading = Loading;

export default Card;
