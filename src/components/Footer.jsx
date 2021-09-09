// Dependencies
import React, { useContext } from "react";
import {
  ContainerFooter,
  BtnFooter,
  PriceFooter,
  MessagePrice,
  ContainerSectionLeft,
  ContainerSectionRight,
  ContainerBtnFooter,
  ContainerPrice,
} from "../css/footer.style";

// Context
import Price from "../context/Price";

export default function Footer() {
  const { price } = useContext(Price);

  return (
    <ContainerFooter>
      <ContainerSectionLeft>
        <h3 className='mb-2 font-bold text-lg'>Free Shipping</h3>
        <h3 className='font-bold text-lg'>2 years warranty</h3>
      </ContainerSectionLeft>
      <ContainerSectionRight>
        <ContainerPrice>
          <PriceFooter>${price}</PriceFooter>
          <MessagePrice>Need financing? Learn more</MessagePrice>
        </ContainerPrice>
        <ContainerBtnFooter>
          <BtnFooter>Buy now</BtnFooter>
        </ContainerBtnFooter>
      </ContainerSectionRight>
    </ContainerFooter>
  );
}
