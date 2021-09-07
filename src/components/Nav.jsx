// Dependencies
import React from "react";

// Assets
import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <div className="w-11/12 h-20 p-1 flex flex-row justify-center items-center box-border border-b-2">
      <img className="w-16 h-16" src={logo} alt="Logo de Serempre" />
    </div>
  );
}
