import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

function Carousel() {
  const initialImages = [
    "./sector-3-foto-1.png",
    "./sector-3-foto-2.png",
    "./sector-3-foto-3.png",
    "./sector-3-foto-4.png"
  ];
  const [images, setImages] = useState([...initialImages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalId.current); // Schoonmaakfunctie om interval te stoppen bij het verwijderen van de component
  }, []); // Effect wordt uitgevoerd wanneer de component wordt gemount

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
    }, 5000); // Timer van 5 seconden
  };

  const handleClick = (index) => {
    clearInterval(intervalId.current); // Stop de huidige interval
    setActiveIndex(index);
    startInterval(); // Start een nieuwe interval
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleClick((activeIndex + 1) % initialImages.length),
    onSwipedRight: () => handleClick((activeIndex - 1 + initialImages.length) % initialImages.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const newImages = [...initialImages.slice(activeIndex), ...initialImages.slice(0, activeIndex)];
    setImages(newImages);
  }, [activeIndex]);

  return (
    <div className="container pt-4" style={{ maxWidth: '1110px', margin: '0 auto' }}>
      <div className="" style={{ display: 'flex', justifyContent: 'center' }} {...handlers}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="img-fluid"
              style={{
                padding: '5px',
                height: '380px',
                objectFit: 'cover',
                maxWidth: index === initialImages.length - 1 ? '100px' : 'auto',
                borderTopLeftRadius: index === initialImages.length - 1 ? '20px' : '0',
                borderBottomLeftRadius: index === initialImages.length - 1 ? '20px' : '0'
              }}
              onDragStart={e => e.preventDefault()} // Voorkom het standaard sleepgedrag van de afbeelding
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {initialImages.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: index === activeIndex ? '20px' : '10px',
              height: '5px',
              background: index === activeIndex ? 'black' : 'gray',
              marginRight: '5px',
              transition: 'width 0.3s ease-in-out',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
