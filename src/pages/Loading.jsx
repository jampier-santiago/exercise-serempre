//  Dependencies
import React, { useEffect, useState } from "react";
import { ContainerLoading, ContainerWordLoading } from "../css/loading.style";

// Components
import Nav from "../components/Nav";

export default function Loading() {
  const [arrayWord, setArrayWord] = useState(null);
  const word = "cargando...";

  const wordToArray = () => {
    setArrayWord(Array.from(word));
  };

  useEffect(() => {
    wordToArray();
  }, []);

  return (
    <ContainerLoading>
      <Nav />

      <ContainerWordLoading>
        {arrayWord &&
          arrayWord.map((item, index) => {
            return (
              <h2
                className='animate-bounce text-5xl font-bold text-blue-600'
                key={index}
                style={{
                  animationDelay: `calc(0.1s * ${index})`,
                }}>
                {item}
              </h2>
            );
          })}
      </ContainerWordLoading>
    </ContainerLoading>
  );
}
