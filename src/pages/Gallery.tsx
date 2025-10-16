// src/pages/Gallery.tsx 
import React from 'react';

const Gallery: React.FC = () => {
  const carouselImages = [
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_american_black_bear_05.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_americanus.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_black_bear_03.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_black_bear_04.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_black_bear_06.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_black_bear_yellowstone.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_cinnamon_02.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_eurasian_brown02.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_himalayan_brown_02.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_kamchatka_brown_02.webp',
    'https://bearsapi.ryanhunter.ca/images/carousel/ic_ussuri_brown_02.webp'
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-primary mb-4">Gallery - Bears of the World</h1>
      
      <div id="bearCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#bearCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner rounded">
          {carouselImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img 
                src={image} 
                className="d-block w-100" 
                alt={`Bear ${index + 1}`}
                style={{ height: '846px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#bearCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bearCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row">
        <div className="col-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
