// Dependencies
import React from "react";
import { ContainerNav } from "../css/nav.style";

// Assets
import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <ContainerNav>
      <img className='w-16 h-16' src={logo} alt='Logo de Serempre' />
    </ContainerNav>
  );
}
