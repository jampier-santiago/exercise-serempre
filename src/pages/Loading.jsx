import React, { useEffect, useState } from "react";

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
    <section className='w-screen min-h-screen relative flex flex-col items-center overflow-x-hidden'>
      <Nav />
      <div className='w-11/12 h-5/6 p-5 absolute top-2/4 flex flex-row justify-center items-center tracking-wide box-border'>
        {arrayWord &&
          arrayWord.map((item, index) => {
            return (
              <span
                className='animate-bounce text-5xl font-bold text-blue-600'
                key={index}
                style={{
                  animationDelay: `calc(0.1s * ${index})`,
                }}>
                {item}
              </span>
            );
          })}
      </div>
    </section>
  );
}
