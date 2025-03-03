import React from "react";
import AdressCard from "../AddressCard/AdressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AdressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {[1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                PRICE DETAILS
              </p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹4697</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-₹3419</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹1278</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 mt-4 rounded-md font-semibold">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
