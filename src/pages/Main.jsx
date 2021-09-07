// Dependecies
import React, { useEffect, useState, useMemo } from "react";
// import tw from "twin.macro";

// Components
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import SliderInfo from "../components/SliderInfo";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Pages
import Loading from "./Loading";

// Context
import Price from "../context/Price";

// Assets
import iconHand from "../assets/images/iconHand.png";
import iconActiveNoise from "../assets/images/iconActiveNoise.png";
import iconEqualizer from "../assets/images/iconEqualizer.png";
// import styled from "styled-components";

export default function Main() {
  const [price, setPrice] = useState(295.95);
  const priceData = useMemo(() => ({ price, setPrice }), [price]);

  const user = "...";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Serempre";

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!loading) {
    return (
      <Price.Provider value={priceData}>
        <section className='w-screen max-w-[99vw] box-border flex flex-col items-center'>
          <Nav />

          <section className='mb-14 box-border xl:w-11/12 xl:flex xl:justify-end xl:items-start xl:mb-24'>
            <section className='w-full left-[7%] box-border xl:w-5/12 xl:fixed'>
              <Slider />

              <section className='hidden md:w-11/12 md:max-w-lg  md:mt-12 md:mx-auto md:grid grid-cols-3 gap-1 xl:w-full xl:max-w-3xl'>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    className='mb-3 w-7'
                    src={iconHand}
                    alt='Icono de una mano'
                  />
                  <span className='text-xs font-normal'>
                    Customizable Touch Controls
                  </span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    className='mb-3 w-7'
                    src={iconActiveNoise}
                    alt='Icono de touch'
                  />
                  <span className='text-xs font-normal'>
                    Active Noise Cancellation
                  </span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    className='mb-3 w-7'
                    src={iconEqualizer}
                    alt='Icono de hondas auditivas'
                  />
                  <span className='text-xs font-normal'>
                    Built-in Equalizer
                  </span>
                </div>
              </section>
            </section>

            <section className='w-full mt-12 box-border xl:w-5/12'>
              <section className='w-11/12 mx-auto md:max-w-lg box-border'>
                <div className='w-full'>
                  <span className='text-red-600 font-normal text-sm uppercase'>
                    New release
                  </span>
                </div>
                <div className='w-full mt-4'>
                  <h2 className='font-bold text-[39px] text-left'>
                    MOMENTUM True Wireless 2
                  </h2>
                  <h3 className='mt-3 text-gray-500 text-xl font-bold'>
                    Earbuds that put sound first
                  </h3>
                </div>
                <div className='mt-10'>
                  <small className='text-gray-500 uppercase text-sm'>
                    Starting at
                  </small>
                  <h3 className='mt-3 font-bold text-4xl overflow-hidden'>
                    $295.95
                  </h3>
                </div>
              </section>

              <SliderInfo />

              <section className='w-11/12 mx-auto mt-12 md:max-w-lg box-border'>
                <div className='w-full'>
                  <h2 className='font-bold text-xl'>Choose your finish.</h2>
                </div>
                <div className='w-full'>
                  <Card
                    title='Ivory White'
                    text='For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. '
                  />
                  <Card
                    title='Matte Black'
                    text='Of all of the celestial bodies that capture our attention and fascination as astronomers.'
                  />
                </div>
              </section>

              <section className='w-11/12 mx-auto mt-12 md:max-w-lg box-border'>
                <div className='w-full'>
                  <h2 className='font-bold text-xl'>
                    Would you like to add extended.
                  </h2>
                </div>
                <div className='w-full'>
                  <Card
                    title='2 years coverage'
                    text='For the past 75 years, Sennheiser has put sound first.'></Card>
                  <Card
                    title='3 years coverage'
                    text='For the past 75 years, Sennheiser has put sound first.'
                    valuePrice='+ $75'></Card>
                </div>
              </section>

              <section className='w-11/12 mx-auto mt-12 md:max-w-lg box-border'>
                <div className='w-full'>
                  <h2 className='font-bold text-xl'>features</h2>
                </div>
                <div className='w-full'>
                  <Card title='Voice Assistant support'></Card>
                  <Card title='Customizable controls' valuePrice='+ $25'></Card>
                </div>
              </section>

              <section className='w-11/12 mx-auto mt-12 md:max-w-lg box-border'>
                <div className='w-full'>
                  <h2 className='font-bold text-xl'>Specifications.</h2>
                </div>
                <div className='w-full mt-3'>
                  <div className='border-t-2 py-4'>
                    <h3 className='mb-1 font-bold text-sm'>Dimensions</h3>
                    <span className='text-sm font-normal'>
                      76.8 x 43.8 x 34.7 mm (earbuds and charging case)
                    </span>
                  </div>
                  <div className='border-t-2 py-4'>
                    <h3 className='mb-1 font-bold text-sm'>USB Standard</h3>
                    <span className='text-sm font-normal'>USB-C</span>
                  </div>
                  <div className='border-t-2 py-4'>
                    <h3 className='mb-1 font-bold text-sm'>Power supply</h3>
                    <span className='text-sm font-normal'>
                      Sennheiser 7mm dynamic driver
                    </span>
                  </div>
                  <div className='border-t-2 py-4'>
                    <h3 className='mb-1 font-bold text-sm'>
                      Frequency response (Microphone)
                    </h3>
                    <span className='text-sm font-normal'>
                      100 Hz to 10 kHz
                    </span>
                  </div>
                  <div className='border-t-2 py-4'>
                    <h3 className='mb-1 font-bold text-sm'>
                      Frequency response
                    </h3>
                    <span className='text-sm font-normal'>5 - 21,000 Hz</span>
                  </div>
                  <div className='border-t-2 py-4 border-b-2'>
                    <h3 className='mb-1 font-bold text-sm'>
                      Noise cancellation
                    </h3>
                    <span className='text-sm font-normal'>
                      Single-Mic ANC per earbud side
                    </span>
                  </div>
                </div>
              </section>
            </section>
          </section>

          <Footer />
        </section>
      </Price.Provider>
    );
  } else {
    return <Loading />;
  }
}
