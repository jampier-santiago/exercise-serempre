// Props
// Title: Debe llegar el titulo de la tarjeta
// Text: Debe llegar el texto para la tarjeta
// valuePrice: Debe llegar el precio, en caso de que la tarjeta lo necesite

// Depencies
import React, { useState, useContext } from "react";
import { TitleCard, DescriptionCard } from "../css/card.style";

// Context
import Price from "../context/Price";

export default function Card({ title, text, valuePrice }) {
  const [active, setActive] = useState(false);
  const { price, setPrice } = useContext(Price);

  // Función para colocar la clase active a la tarjeta
  function addClassActive() {
    if (valuePrice) {
      if (!active) {
        const temporaryPrice = valuePrice.split("$")[1];
        setPrice(price + parseInt(temporaryPrice));
      } else {
        const temporaryPrice = valuePrice.split("$")[1];
        setPrice(price - parseInt(temporaryPrice));
      }
    }

    setActive(!active);
  }

  return (
    <section
      className={
        active
          ? "w-full mt-5 p-5 border-2 border-gray-200 rounded-md cursor-pointer flex justify-between items-center border-blue-500"
          : "w-full mt-5 p-5 border-2 border-gray-200 rounded-md cursor-pointer flex justify-between items-center"
      }
      onClick={addClassActive}>
      <div
        className='w-full'
        style={valuePrice ? { width: "75%" } : { width: "100%" }}>
        <div className='w-full mb-2'>
          <TitleCard>{title}</TitleCard>
        </div>
        <div
          className='w-full'
          style={text ? { display: "block" } : { display: "none" }}>
          <DescriptionCard>{text}</DescriptionCard>
        </div>
      </div>
      <div>
        <span>{valuePrice}</span>
      </div>
    </section>
  );
}
