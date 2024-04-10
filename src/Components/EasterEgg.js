import React, { useState, useEffect } from 'react';
import sunSet from './Images/sunset.jpg';
import greySky from './Images/grey-sky.jpg';
import bgImg from './Images/bg-img.jpg';
import snow from './Images/snow1.jpg';
import tree from './Images/tree.jpg';
import moountains from './Images/mountains.jpg';


function EasterEgg() {
  const [inputValue, setInputValue] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = [sunSet, greySky, snow, bgImg, tree, moountains];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '1123') {
      alert('Kanon! Du gjorde ett fantastisk jobb!');
    } else {
      alert('Hoppsan! Nu blev det fel, försök igen.');
    }
  };

  useEffect(() => {
    const handleClick = () => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [images.length]);

  return (
    <section className='ee-bg' style={{ backgroundImage: `url(${images[backgroundImage]})`}}>
      <div className='text-ee'>
        <h1 style={{ color:"orangered"}}>Skriv gärna 1123 i rutan nedan och tryck skicka:</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Skriv talet"
          />
          <button type="submit">Skicka</button>
        </form>
      </div>
    </section>
  );
}

export default EasterEgg;
