import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="cursor-pointer flex flex-col items-center
    bg-white rounded-lg shadow-lg
    overflow-hidden w-[15remJ mx-3 border"
    >
      <div className="h-[13rem] w-[10-rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-1g font-medium text-gray-900 ">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
