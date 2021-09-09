// Dependencies
import React, { useRef } from "react";
import {
  ContainerSldier,
  ContainerControlsSlider,
  ContainerWindowsSlider,
} from "../css/slider.style";

// Assets
import imagen1 from "../assets/images/imagen-1.png";
import imagen2 from "../assets/images/imagen-2.png";
import imagen3 from "../assets/images/imagen-3.png";

export default function Slider() {
  // Controles
  const control1 = useRef();
  const control2 = useRef();
  const control3 = useRef();

  //
  const window1 = useRef();
  const window2 = useRef();
  const window3 = useRef();

  // Funcion para agregar la clase active al control seleccionado
  function addClassActive(control) {
    if (control1.current.classList.contains("border-gray-900")) {
      control1.current.classList.remove("border-gray-900");
    }
    if (control2.current.classList.contains("border-gray-900")) {
      control2.current.classList.remove("border-gray-900");
    }
    if (control3.current.classList.contains("border-gray-900")) {
      control3.current.classList.remove("border-gray-900");
    }

    switch (control) {
      case 1:
        control1.current.classList.add("border-gray-900");
        break;
      case 2:
        control2.current.classList.add("border-gray-900");
        break;
      case 3:
        control3.current.classList.add("border-gray-900");
        break;
    }

    moveSlider(control - 1);
  }

  // Funcion para mover el slider
  function moveSlider(position) {
    window1.current.style.transform = `translateX(-${position * 100}%)`;
    window1.current.style.transitionDuration = "0.25s";
    window2.current.style.transform = `translateX(-${position * 100}%)`;
    window2.current.style.transitionDuration = "0.25s";
    window3.current.style.transform = `translateX(-${position * 100}%)`;
    window3.current.style.transitionDuration = "0.25s";
  }

  return (
    <ContainerSldier>
      <ContainerWindowsSlider>
        <div
          className='w-full h-full flex justify-center items-center flex-shrink-0'
          ref={window1}>
          <img
            className='w-40 md:w-72'
            src={imagen1}
            alt='Imagen de los audifonos en su caja'
          />
        </div>
        <div
          className='w-full h-full flex justify-center items-center flex-shrink-0'
          ref={window2}>
          <img
            className='w-40 md:w-72'
            src={imagen2}
            alt='Imagen de los audifonos'
          />
        </div>
        <div
          className='w-full h-full flex justify-center items-center flex-shrink-0'
          ref={window3}>
          <img
            className='w-40 md:w-72'
            src={imagen3}
            alt='Imagen de los audifonos internamente'
          />
        </div>
      </ContainerWindowsSlider>

      <ContainerControlsSlider>
        <div
          className='w-full h-12 md:h-24 flex justify-center items-center border-2 border-gray-200 rounded-xl overflow-hidden border-gray-900 cursor-pointer'
          ref={control1}
          onClick={() => {
            addClassActive(1);
          }}>
          <img
            className='w-12 md:w-16'
            src={imagen1}
            alt='Imagen de los audifonos en su caja'
          />
        </div>

        <div
          className='w-full h-12 md:h-24 flex justify-center items-center border-2 border-2 border-gray-200 rounded-xl cursor-pointer'
          ref={control2}
          onClick={() => {
            addClassActive(2);
          }}>
          <img
            className='w-12 md:w-16'
            src={imagen2}
            alt='Imagen de los audifonos'
          />
        </div>

        <div
          className='w-full h-12 md:h-24 flex justify-center items-center border-2 border-2 border-gray-200 rounded-xl cursor-pointer'
          ref={control3}
          onClick={() => {
            addClassActive(3);
          }}>
          <img
            className='w-12 md:w-16'
            src={imagen3}
            alt='Imagen de los audifonos internamente'
          />
        </div>
      </ContainerControlsSlider>
    </ContainerSldier>
  );
}
