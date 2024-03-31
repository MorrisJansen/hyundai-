import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagina() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % 2; // 2 is het aantal afbeeldingen in de carousel
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
    <div className='bg-white header mb-1'>
      <div className='d-flex justify-content-between align-items-center py-5 py-md-4 container' style={{ maxHeight: '100px' }}>
        <svg style={{ marginLeft: '85px' }} width="200" height="28" viewBox="0 0 308 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M118.295 5.98256V17.5674H105.17V5.98889H97.9327V36.396H105.17V24.1647H118.301V36.396H125.545V5.98256H118.295ZM152.061 5.98256L144.488 18.0237L136.927 5.98256H128.384L140.882 25.8568V36.3897H148.113V25.8568L160.61 5.98256H152.061ZM183.881 5.98256V28.265C183.881 29.1143 183.247 29.7924 182.348 29.7924H170.75V5.98889H163.513V36.396H184.895C186.796 36.396 188.33 35.8256 189.446 34.7166C190.555 33.6012 191.119 32.0738 191.119 30.179V5.98256H183.881ZM219.213 5.98256H197.824V36.3897H205.048V12.5608H216.671C217.603 12.5608 218.192 13.296 218.192 14.0818V36.3897H225.43V12.1996C225.43 10.2984 224.859 8.7647 223.763 7.65564C222.635 6.54025 221.114 5.98256 219.213 5.98256ZM253.523 5.98256H232.135V36.3897H253.523C255.425 36.3897 256.946 35.8193 258.055 34.7102C259.177 33.5948 259.734 32.0675 259.734 30.1726V12.1996C259.734 10.2984 259.177 8.7647 258.055 7.65564C256.946 6.54025 255.418 5.98256 253.523 5.98256ZM252.503 14.1389V28.2207C252.51 28.4263 252.475 28.6311 252.401 28.8228C252.326 29.0145 252.213 29.1891 252.069 29.336C251.925 29.4829 251.753 29.5991 251.563 29.6776C251.373 29.756 251.169 29.7951 250.963 29.7924H239.359V12.5672H250.912C251.863 12.5672 252.497 13.2263 252.497 14.1389M272.346 5.98256C270.444 5.98256 268.911 6.54025 267.802 7.65564C266.686 8.77737 266.135 10.3047 266.135 12.1996V36.3897H273.347V26.9849H286.491V36.3897H293.722V5.98256H272.346ZM286.491 12.5672V20.4003H273.347V14.1008C273.347 13.353 273.93 12.5608 274.893 12.5608L286.491 12.5672ZM300.763 36.3897H308V5.98256H300.763V36.3897ZM41.3582 42.3659C64.2047 42.3659 82.7291 32.8787 82.7291 21.1861C82.7291 9.48083 64.2047 0 41.3582 0C18.518 0 0 9.47449 0 21.1861C0 32.8787 18.518 42.3659 41.3582 42.3659ZM49.1533 31.9661C48.4562 33.5695 47.2711 36.9854 44.546 38.3479C43.6775 38.7445 42.7373 38.9601 41.7828 38.9817H41.3646C33.7343 38.9817 26.6236 37.917 20.6791 36.1108L20.451 36.0221C19.8996 35.8383 19.6208 35.5848 19.6208 35.2679C19.6208 35.0018 19.7665 34.7926 19.963 34.5962L20.3369 34.2666C21.7185 33.1259 25.8505 30.1283 33.6392 27.137C36.3706 26.0976 39.7929 24.7985 43.3735 24.038C45.4712 23.6007 53.26 22.4092 49.147 31.9725M70.0479 10.6152C70.1936 10.3617 70.3901 10.1463 70.745 10.1272C70.9351 10.1082 71.2013 10.1526 71.6005 10.4061C76.455 13.391 79.3386 17.1301 79.3386 21.1798C79.3386 28.4742 69.9528 34.7546 56.5237 37.4987C55.6618 37.6698 55.0851 37.6635 54.895 37.448C54.7556 37.3213 54.7176 37.0804 54.895 36.7889C54.9951 36.6118 55.1141 36.446 55.2499 36.2946C62.5633 27.6757 68.134 14.9564 69.712 11.2933C69.8387 11.0398 69.9528 10.7863 70.0479 10.6152ZM33.6962 10.3491C34.3934 8.75202 35.5785 5.33614 38.3036 3.97992C39.1274 3.56799 40.1541 3.37152 41.0604 3.34618H41.4723C49.1153 3.34618 56.2132 4.39819 62.1704 6.21704C62.2148 6.23605 62.3542 6.28042 62.3986 6.30577C62.9436 6.48955 63.2224 6.74305 63.2224 7.05359C63.2224 7.3261 63.0767 7.52889 62.8865 7.71902C62.7978 7.80774 62.6774 7.90914 62.5063 8.04856C61.1374 9.20198 56.9991 12.1933 49.2103 15.1782C46.4662 16.2239 43.0503 17.5231 39.4823 18.2772C37.3783 18.7208 29.5832 19.9123 33.6962 10.3491ZM26.2054 4.84815C27.0673 4.68338 27.6376 4.68338 27.8468 4.89885C27.9735 5.03828 28.0052 5.26642 27.8404 5.55161C27.7368 5.72802 27.6158 5.89362 27.4792 6.04593C20.1658 14.6712 14.5952 27.3841 13.0045 31.0599C12.8904 31.3134 12.77 31.5669 12.6686 31.7316C12.5291 31.9851 12.3327 32.2069 11.9841 32.2259C11.794 32.245 11.5215 32.1879 11.1159 31.9408C6.2614 28.9622 3.39054 25.2231 3.39054 21.1734C3.39054 13.8727 12.77 7.59227 26.2054 4.85449" fill="#002E6B"/>
        </svg>
        <img src='./private-lease.jpg' alt='privateLease' style={{ height: '70px', width: '63px', marginRight: '100px' }} />
      </div>


      {/* hero sectie */}

      <div className="hero-section">
        <div className="container-fluid" style={{ backgroundColor: '#f8f8ff' }}>
          <div className="row">

            {/* linkerkolom */}
            <div className='col-lg-6' style={{ height: '700px' }}>
              <div style={{ marginLeft: '200px' }}>
                <div style={{ backgroundColor: '#f0f0f0', display: 'inline-block', borderRadius: '25px', padding: '0.5rem 1.5rem', fontWeight: '700' }}>
                  <span className="" style={{ color: '#747474' }}>NIEUW</span>
                </div>
                <h1 style={{ fontSize: '66px' }}>De vernieuwde Hyundai i10</h1>
                <h3 style={{ fontSize: '40px' }}>Maak een groots statement</h3>
                <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '18px', width: '70%' }}>Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.</p>
                <p style={{ fontSize: '18px', fontWeight: '700' }}>Je stapt al in vanaf €275 per maand*</p>
              </div>
            </div>





            {/* rechterkolom */}
            <div className="col-lg-6">
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
    <div className="carousel-inner">
      <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`} style={{ position: 'relative' }}>
        <img className="d-block w-100" style={{ width: '735px', height: '745px', objectFit: 'cover', borderRadius: '0 0 0 70px'}} src="./slider-image.jpg" alt="First slide" />
        <span className="carousel-control-prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" style={{ position: 'absolute', bottom: '10px', left: '600px', zIndex: 1 }} aria-hidden="true"></span>
        </span>
        <span className="carousel-control-next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" style={{ position: 'absolute', bottom: '10px', right: '40px', zIndex: 1 }} aria-hidden="true"></span>
        </span>
      </div>
      
      <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`} style={{ position: 'relative' }}>
        <img className="d-block w-100" style={{ width: '735px', height: '745px'}} src="./slider-image-1.jpg" alt="Second slide" />
        <span className="carousel-control-prev"  onClick={prevSlide}>
          <span className="carousel-control-prev-icon" style={{ position: 'absolute', bottom: '10px', left: '600px', zIndex: 1 }} aria-hidden="true"></span>
        </span>
        <span className="carousel-control-next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" style={{ position: 'absolute', bottom: '10px', right: '40px', zIndex: 1 }}  aria-hidden="true"></span>
        </span>
      </div>
    </div>
  </div>
</div>










          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagina;
