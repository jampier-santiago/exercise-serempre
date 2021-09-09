// Dependencies
import React, { useRef } from "react";
import {
  ContainerSliderInfo,
  DescriptionSliderInfo,
  ContainerDescriptionsSlider,
  ContainerControlsSliderInfo,
  ControlSliderinfo,
} from "../css/sliderInfo.style";

export default function SliderInfo() {
  // Controles
  const control1 = useRef();
  const control2 = useRef();
  const control3 = useRef();

  // Ventanas
  const window1 = useRef();
  const window2 = useRef();
  const window3 = useRef();

  // Funcion para agregar la clase active al control seleccionado
  function addClassActive(control) {
    if (control1.current.classList.contains("text-gray-900")) {
      control1.current.classList.remove("text-gray-900");
      control1.current.classList.remove("border-b-2");
      control1.current.classList.remove("border-gray-900");
    }
    if (control2.current.classList.contains("text-gray-900")) {
      control2.current.classList.remove("text-gray-900");
      control2.current.classList.remove("border-b-2");
      control2.current.classList.remove("border-gray-900");
    }
    if (control3.current.classList.contains("text-gray-900")) {
      control3.current.classList.remove("text-gray-900");
      control3.current.classList.remove("border-b-2");
      control3.current.classList.remove("border-gray-900");
    }

    switch (control) {
      case 1:
        control1.current.classList.add("text-gray-900");
        control1.current.classList.add("border-b-2");
        control1.current.classList.add("border-gray-900");
        break;
      case 2:
        control2.current.classList.add("text-gray-900");
        control2.current.classList.add("border-b-2");
        control2.current.classList.add("border-gray-900");
        break;
      case 3:
        control3.current.classList.add("text-gray-900");
        control3.current.classList.add("border-b-2");
        control3.current.classList.add("border-gray-900");
        break;
    }

    moveSlider(control - 1);
  }

  // Funcion para mover el slider
  function moveSlider(position) {
    window1.current.style.transform = `translateX(-${position * 100}%)`;
    window1.current.style.transitionDuration = "0.2s";
    window2.current.style.transform = `translateX(-${position * 100}%)`;
    window2.current.style.transitionDuration = "0.2s";
    window3.current.style.transform = `translateX(-${position * 100}%)`;
    window3.current.style.transitionDuration = "0.2s";
  }

  return (
    <ContainerSliderInfo>
      <ContainerControlsSliderInfo>
        <ControlSliderinfo>
          <h3
            className='font-medium text-xl text-gray-500 cursor-pointer text-gray-900 border-b-2 border-gray-900'
            ref={control1}
            onClick={() => addClassActive(1)}>
            Overview
          </h3>
        </ControlSliderinfo>

        <ControlSliderinfo>
          <h3
            className='font-medium text-xl text-gray-500 cursor-pointer'
            ref={control2}
            onClick={() => addClassActive(2)}>
            Features
          </h3>
        </ControlSliderinfo>

        <ControlSliderinfo>
          <h3
            className='font-medium text-xl text-gray-500 cursor-pointer'
            ref={control3}
            onClick={() => addClassActive(3)}>
            What's in the box?
          </h3>
        </ControlSliderinfo>
      </ContainerControlsSliderInfo>

      <ContainerDescriptionsSlider>
        <div className='w-full flex-shrink-0' ref={window1}>
          <DescriptionSliderInfo>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
          </DescriptionSliderInfo>
        </div>

        <div className='w-full flex-shrink-0' ref={window2}>
          <DescriptionSliderInfo>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
            <br />
            <strong>Features</strong>
          </DescriptionSliderInfo>
        </div>

        <div className='w-full flex-shrink-0' ref={window3}>
          <DescriptionSliderInfo>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
            <br />
            <strong>What's in the box?</strong>
          </DescriptionSliderInfo>
        </div>
      </ContainerDescriptionsSlider>
    </ContainerSliderInfo>
  );
}
