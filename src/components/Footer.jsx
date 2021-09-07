// Dependencies
import React, { useContext } from "react";
import Price from "../context/Price";

export default function Footer() {
  const { price } = useContext(Price);

  return (
    <footer className="w-screen md:h-28 xl:h-20 p-5 xl:px-24 xl:py-0 flex justify-end md:justify-around xl:fixed xl:inset-x-0 xl:bottom-0 xl:justify-between bg-gray-300 box-border">
      <section className="hidden md:flex md:flex-col md:justify-center md:items-start">
        <h3 className="mb-2 font-bold text-lg">Free Shipping</h3>
        <h3 className="font-bold text-lg">2 years warranty</h3>
      </section>
      <section className="box-border md:flex md:items-center md:justify-between">
        <div className="flex flex-col justify-center items-end">
          <h2 className="mb-3 md:mb-1 font-bold text-3xl">${price}</h2>
          <span className="text-sm text-gray-500">
            Need financing? Learn more
          </span>
        </div>
        <div className="mt-5 md:mt-0 md:ml-12 flex justify-end">
          <span className="w-28 h-14 flex justify-center items-center bg-blue-500 rounded-lg text-white font-bold text-sm tracking-wider cursor-pointer">
            Buy now
          </span>
        </div>
      </section>
    </footer>
  );
}
