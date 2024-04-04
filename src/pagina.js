import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


import './App.css';
import { useSwipeable } from 'react-swipeable';




class ScrollToTopButton extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <button className='move-to-top d-lg-none d-md-none' onClick={this.scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} style={{ color: '#ffffff' }} />
      </button>
    );
  }
}


function Pagina() {




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
    return () => clearInterval(intervalId.current);
  }, []);

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



  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % 2;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  return (






    <div className='container-klein-geheel'>
    <div className='bg-white header mb-1'>
    <div className='header-container'>
    <svg className='logo-1' width="200" height="28" viewBox="0 0 308 43" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M118.295 5.98256V17.5674H105.17V5.98889H97.9327V36.396H105.17V24.1647H118.301V36.396H125.545V5.98256H118.295ZM152.061 5.98256L144.488 18.0237L136.927 5.98256H128.384L140.882 25.8568V36.3897H148.113V25.8568L160.61 5.98256H152.061ZM183.881 5.98256V28.265C183.881 29.1143 183.247 29.7924 182.348 29.7924H170.75V5.98889H163.513V36.396H184.895C186.796 36.396 188.33 35.8256 189.446 34.7166C190.555 33.6012 191.119 32.0738 191.119 30.179V5.98256H183.881ZM219.213 5.98256H197.824V36.3897H205.048V12.5608H216.671C217.603 12.5608 218.192 13.296 218.192 14.0818V36.3897H225.43V12.1996C225.43 10.2984 224.859 8.7647 223.763 7.65564C222.635 6.54025 221.114 5.98256 219.213 5.98256ZM253.523 5.98256H232.135V36.3897H253.523C255.425 36.3897 256.946 35.8193 258.055 34.7102C259.177 33.5948 259.734 32.0675 259.734 30.1726V12.1996C259.734 10.2984 259.177 8.7647 258.055 7.65564C256.946 6.54025 255.418 5.98256 253.523 5.98256ZM252.503 14.1389V28.2207C252.51 28.4263 252.475 28.6311 252.401 28.8228C252.326 29.0145 252.213 29.1891 252.069 29.336C251.925 29.4829 251.753 29.5991 251.563 29.6776C251.373 29.756 251.169 29.7951 250.963 29.7924H239.359V12.5672H250.912C251.863 12.5672 252.497 13.2263 252.497 14.1389M272.346 5.98256C270.444 5.98256 268.911 6.54025 267.802 7.65564C266.686 8.77737 266.135 10.3047 266.135 12.1996V36.3897H273.347V26.9849H286.491V36.3897H293.722V5.98256H272.346ZM286.491 12.5672V20.4003H273.347V14.1008C273.347 13.353 273.93 12.5608 274.893 12.5608L286.491 12.5672ZM300.763 36.3897H308V5.98256H300.763V36.3897ZM41.3582 42.3659C64.2047 42.3659 82.7291 32.8787 82.7291 21.1861C82.7291 9.48083 64.2047 0 41.3582 0C18.518 0 0 9.47449 0 21.1861C0 32.8787 18.518 42.3659 41.3582 42.3659ZM49.1533 31.9661C48.4562 33.5695 47.2711 36.9854 44.546 38.3479C43.6775 38.7445 42.7373 38.9601 41.7828 38.9817H41.3646C33.7343 38.9817 26.6236 37.917 20.6791 36.1108L20.451 36.0221C19.8996 35.8383 19.6208 35.5848 19.6208 35.2679C19.6208 35.0018 19.7665 34.7926 19.963 34.5962L20.3369 34.2666C21.7185 33.1259 25.8505 30.1283 33.6392 27.137C36.3706 26.0976 39.7929 24.7985 43.3735 24.038C45.4712 23.6007 53.26 22.4092 49.147 31.9725M70.0479 10.6152C70.1936 10.3617 70.3901 10.1463 70.745 10.1272C70.9351 10.1082 71.2013 10.1526 71.6005 10.4061C76.455 13.391 79.3386 17.1301 79.3386 21.1798C79.3386 28.4742 69.9528 34.7546 56.5237 37.4987C55.6618 37.6698 55.0851 37.6635 54.895 37.448C54.7556 37.3213 54.7176 37.0804 54.895 36.7889C54.9951 36.6118 55.1141 36.446 55.2499 36.2946C62.5633 27.6757 68.134 14.9564 69.712 11.2933C69.8387 11.0398 69.9528 10.7863 70.0479 10.6152ZM33.6962 10.3491C34.3934 8.75202 35.5785 5.33614 38.3036 3.97992C39.1274 3.56799 40.1541 3.37152 41.0604 3.34618H41.4723C49.1153 3.34618 56.2132 4.39819 62.1704 6.21704C62.2148 6.23605 62.3542 6.28042 62.3986 6.30577C62.9436 6.48955 63.2224 6.74305 63.2224 7.05359C63.2224 7.3261 63.0767 7.52889 62.8865 7.71902C62.7978 7.80774 62.6774 7.90914 62.5063 8.04856C61.1374 9.20198 56.9991 12.1933 49.2103 15.1782C46.4662 16.2239 43.0503 17.5231 39.4823 18.2772C37.3783 18.7208 29.5832 19.9123 33.6962 10.3491ZM26.2054 4.84815C27.0673 4.68338 27.6376 4.68338 27.8468 4.89885C27.9735 5.03828 28.0052 5.26642 27.8404 5.55161C27.7368 5.72802 27.6158 5.89362 27.4792 6.04593C20.1658 14.6712 14.5952 27.3841 13.0045 31.0599C12.8904 31.3134 12.77 31.5669 12.6686 31.7316C12.5291 31.9851 12.3327 32.2069 11.9841 32.2259C11.794 32.245 11.5215 32.1879 11.1159 31.9408C6.2614 28.9622 3.39054 25.2231 3.39054 21.1734C3.39054 13.8727 12.77 7.59227 26.2054 4.85449" fill="#002E6B"/>
</svg>

      <img className='logo-2' src='./private-lease.jpg' alt='privateLease' />
    </div>
  </div>
  

      {/* hero sectie */}
      <div className="hero-section">
        <div className="container-fluid hero-container">
          <div className="row">


            {/* linkerkolom */}
            <div className=' col-sm-12 col-lg-6 hoogte-hero'>
              <div className='marge-hero'>
                <div className='nieuw-container'>
                  <span className="nieuw">NIEUW</span>
                </div>
                <h1 className='hero-header-1'>De vernieuwde Hyundai i10</h1>
                <h3 className='hero-header-2'>Maak een groots statement</h3>
                <p className='paragraaf-1'>Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.</p>
                <p className='paragraaf-2'>Je stapt al in vanaf €275 per maand*</p>
                <p className='voorwaarde d-sm-none d-md-none'>* Het maandbedrag van €275 geldt op basis van een looptijd van 72<br></br>
maanden en 5.000 km per jaar bij de i10 Comfort!</p>

              </div>


              {/* card */}
              <div className="card-div false card-container">
              <div className="p-lg-4 p-md-3 card card-grens">
                  <div className="row">
                    <div className="d-flex align-items-center col-md-6">
                      <p className="text-md-start text-left mb-0 card-text">Private Lease nu tijdelijk<br />vanaf €275 p/m*</p>
                    </div>
                    <div className="card-knop-container d-flex justify-content-center align-items-center justify-content-md-end mt-md-0 mt-2 col-md-6">
                    <button type="button" className="btn card-knop"> Vraag offerte aan<FontAwesomeIcon icon={faArrowRight} className='card-knop-icoon'/></button>

                    </div>
                  </div>
                </div>
              </div>




            </div>




{/* rechterkolom */}
<div id='carousel-klein' className="col-sm-12 col-lg-6">
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
    <div className="carousel-inner">


      <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
        <img className="d-block foto-carousel-1 "  src="./slider-image.jpg" alt="First slide" />
        <a className="bottom-text m-0 text-decoration-none ontdek-meer-link text-white" href="/i10-1#inclusive-section">ONTDEK MEER</a>
        <span className="carousel-control-prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} className="bold-icon text-white cursor-pointer pijl-links"/>
        </span>
        <span className="carousel-control-next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} className="bold-icon text-white cursor-pointer pijl-rechts"/>
        </span>
      </div>


      
      <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`} style={{ position: 'relative' }}>
        <img className="d-block w-100 foto-carousel-1" src="./slider-image-1.jpg" alt="Second slide" />
        <a className="bottom-text m-0 text-decoration-none ontdek-meer-link text-white" href="/i10-1#inclusive-section">ONTDEK MEER</a>
        <span className="carousel-control-prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} className="bold-icon text-white cursor-pointer pijl-links"/>
        </span>
        <span className="carousel-control-next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} className="bold-icon text-white cursor-pointer pijl-rechts"/>
        </span>
      </div>


    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      <p className='voorwaarde-klein'>* Het maandbedrag van €275 geldt op basis van een looptijd van 72<br></br>
maanden en 5.000 km per jaar bij de i10 Comfort!</p>


    {/* ronde knop die je naar boven brengt */}
    <div>
        <ScrollToTopButton />
    </div>
    


    <div className='sector-2'>


      <div className='col-sm-12 col-lg-6'>
        <img className='sector-2-foto' src='./sector-2.jpg' alt='foto sector 2'></img>
      </div>

      <div className='col-sm-12 col-lg-6'>
        <div className='sector-2-tekst-container'>
          <p className='sector-2-tekst-1'>Hyundai i10</p>
          <h1 className='sector-2-tekst-2'>All-inclusive genieten met <br></br>Hyundai Private Lease</h1>
          <ul className='sector-2-lijst'>
            <li>Vast maandbedrag inclusief alle kosten, behalve brandstof</li>
            <li>Nieuwe auto met inbegrepen rente en afschrijving</li>
            <li>Pechhulp in binnenland en Europa</li>
            <li>Motorrijtuigenbelasting inbegrepen</li>
            <li>Bandenvervanging, schadeherstel en glasreparatie gedekt</li>
            <li>Afleveringskosten en verwijderingsbijdrage inclusief</li>
            <li>Onderhoud inbegrepen</li>
            <li>Volle tank brandstof bij aflevering</li>
          </ul>
        </div>
      </div>

      <img className='sector-2-foto-klein' src='./sector-2.jpg' alt='foto sector 2'></img>

      

      {/* cards */}
    <div className='container-fluid plaatsing-cards'>
      <div className='cards-container'>


        <div className='cards'>
          <img className='cards-icoon' src='./stuur.svg' alt='stuur'></img>
          <p className='cards-text'>Rijden in een nieuwe Hyundai</p>
        </div>

        <div className='cards'>
          <img className='cards-icoon' src='./munten.svg' alt=''></img>
          <p className='cards-text'>Aantrekkelijk vast bedrag p/m</p>
        </div>

        <div className='cards'>
          <img className='cards-icoon' src='./verzekerd.svg' alt='verzekerd'></img>
          <p className='cards-text'>Incl. verzekering en reparatie</p>
        </div>

        <div className='cards'>
          <img className='cards-icoon' src='./nood.svg' alt='nood'></img>
          <p className='cards-text'>Schadeherstel en onderhoud</p>
        </div>

        <div className='cards'>
          <img className='cards-icoon' src='./portemonnee.svg' alt='portemonnee'></img>
          <p className='cards-text'>Geen verborgen kosten</p>
        </div>


      </div>
    </div>
    </div>






{/* dit is de carousel van sector 3 */}


<div className='container-fluid sector-3'>


<p className='sector-3-tekst-1'>Hyundai i10</p>

<p className='sector-3-tekst-2'>Een frisse kijk op een gedurfd ontwerp</p>

<div className="sector-3-container pt-4" style={{ maxWidth: '1110px', margin: '0 auto' }}>
  <div className="sector-3-afbeeldingen" style={{ display: 'flex', justifyContent: 'center' }} {...handlers}>
    {images.map((image, index) => (
      <div key={index}>
        <img
          src={image}
          alt={`Afbeelding ${index + 1}`}
          id={`image-${index}`} // Uniek id toegevoegd aan de afbeelding
          className="img-vloeistof"
          style={{
            padding: '5px',
            height: '380px',
            objectFit: 'cover',
            maxWidth: index === initialImages.length - 1 ? '100px' : 'auto'
          }}
          onDragStart={e => e.preventDefault()} // Voorkom het standaard sleepgedrag van de afbeelding
        />
      </div>
    ))}
  </div>
  <div className="sector-3-voorbeelden" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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
</div>




<div className='sector-4'></div>







    </div>
  );
}

export default Pagina;
