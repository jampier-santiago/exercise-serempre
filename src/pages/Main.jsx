// Dependecies
import React, { useEffect, useState, useMemo } from "react";

// Styles
import {
  ContainerMain,
  SmallTitle,
  SubTitle,
  Title,
  SpecificationCard,
  ContainerFixed,
  ContainerTop,
  ContainerBody,
  ContainerBottom,
  ContainerInfoProduct,
  PriceProduct,
  ContainerSection,
  SectionTitle,
  RowTable,
  TitleRowTable,
  DescriptionRowTable,
  ContainerFull,
} from "../css/main.styles";

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

export default function Main() {
  const [price, setPrice] = useState(295.95);
  const priceData = useMemo(() => ({ price, setPrice }), [price]);

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
        <ContainerMain>
          <Nav />

          <ContainerBody>
            <ContainerTop>
              <Slider />

              <ContainerFixed>
                <SpecificationCard>
                  <img
                    className='mb-3 w-7'
                    src={iconHand}
                    alt='Icono de una mano'
                  />
                  <SmallTitle>Customizable Touch Controls</SmallTitle>
                </SpecificationCard>
                <SpecificationCard>
                  <img
                    className='mb-3 w-7'
                    src={iconActiveNoise}
                    alt='Icono de touch'
                  />
                  <SmallTitle>Active Noise Cancellation</SmallTitle>
                </SpecificationCard>
                <SpecificationCard>
                  <img
                    className='mb-3 w-7'
                    src={iconEqualizer}
                    alt='Icono de hondas auditivas'
                  />
                  <SmallTitle>Built-in Equalizer</SmallTitle>
                </SpecificationCard>
              </ContainerFixed>
            </ContainerTop>

            <ContainerBottom>
              <ContainerInfoProduct>
                <ContainerFull>
                  <SubTitle>New release</SubTitle>
                </ContainerFull>
                <div className='w-full mt-4'>
                  <Title>MOMENTUM True Wireless 2</Title>
                  <h3 className='mt-3 text-gray-500 text-xl font-bold'>
                    Earbuds that put sound first
                  </h3>
                </div>
                <div className='mt-10'>
                  <small className='text-gray-500 uppercase text-sm'>
                    Starting at
                  </small>
                  <PriceProduct>$295.95</PriceProduct>
                </div>
              </ContainerInfoProduct>

              <SliderInfo />

              <ContainerSection>
                <ContainerFull>
                  <SectionTitle>Choose your finish.</SectionTitle>
                </ContainerFull>
                <ContainerFull>
                  <Card
                    title='Ivory White'
                    text='For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. '
                  />
                  <Card
                    title='Matte Black'
                    text='Of all of the celestial bodies that capture our attention and fascination as astronomers.'
                  />
                </ContainerFull>
              </ContainerSection>

              <ContainerSection>
                <ContainerFull>
                  <SectionTitle>Would you like to add extended.</SectionTitle>
                </ContainerFull>
                <ContainerFull>
                  <Card
                    title='2 years coverage'
                    text='For the past 75 years, Sennheiser has put sound first.'></Card>
                  <Card
                    title='3 years coverage'
                    text='For the past 75 years, Sennheiser has put sound first.'
                    valuePrice='+ $75'></Card>
                </ContainerFull>
              </ContainerSection>

              <ContainerSection>
                <ContainerFull>
                  <SectionTitle>features</SectionTitle>
                </ContainerFull>
                <ContainerFull>
                  <Card title='Voice Assistant support'></Card>
                  <Card title='Customizable controls' valuePrice='+ $25'></Card>
                </ContainerFull>
              </ContainerSection>

              <ContainerSection>
                <ContainerFull>
                  <SectionTitle>Specifications.</SectionTitle>
                </ContainerFull>
                <div className='w-full mt-3'>
                  <RowTable>
                    <TitleRowTable>Dimensions</TitleRowTable>
                    <DescriptionRowTable>
                      76.8 x 43.8 x 34.7 mm (earbuds and charging case)
                    </DescriptionRowTable>
                  </RowTable>
                  <RowTable>
                    <TitleRowTable>USB Standard</TitleRowTable>
                    <DescriptionRowTable>USB-C</DescriptionRowTable>
                  </RowTable>
                  <RowTable>
                    <TitleRowTable>Power supply</TitleRowTable>
                    <DescriptionRowTable>
                      Sennheiser 7mm dynamic driver
                    </DescriptionRowTable>
                  </RowTable>
                  <RowTable>
                    <TitleRowTable>
                      Frequency response (Microphone)
                    </TitleRowTable>
                    <DescriptionRowTable>100 Hz to 10 kHz</DescriptionRowTable>
                  </RowTable>
                  <RowTable>
                    <TitleRowTable>Frequency response</TitleRowTable>
                    <DescriptionRowTable>5 - 21,000 Hz</DescriptionRowTable>
                  </RowTable>
                  <div className='border-t-2 py-4 border-b-2'>
                    <TitleRowTable>Noise cancellation</TitleRowTable>
                    <DescriptionRowTable>
                      Single-Mic ANC per earbud side
                    </DescriptionRowTable>
                  </div>
                </div>
              </ContainerSection>
            </ContainerBottom>
          </ContainerBody>

          <Footer />
        </ContainerMain>
      </Price.Provider>
    );
  } else {
    return <Loading />;
  }
}
