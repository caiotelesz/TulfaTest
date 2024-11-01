import './style.scss';
import { Solutions }  from '../components/solutions';
import { MediaDisplay } from '../components/mediaDisplay';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InfoCard } from '../components/infoCard';

function App() {
  const logos = [
    '/assets/images/garmin-image.png',
    '/assets/images/stanley-image.png',
    '/assets/images/siemens-image.png',
    '/assets/images/wells-image.png',
    '/assets/images/delphi-image.png',
    '/assets/images/under-image.png',
    '/assets/images/americanEagle-image.png',
    '/assets/images/bosch-image.png',
    '/assets/images/lowe-image.png',
    '/assets/images/reckitt-image.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  function handlePrev() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logos.length - 8 : prevIndex - 1));
  };

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex === logos.length - 8 ? 0 : prevIndex + 1));
  };

  function handleButtonClick(button) {
    setActiveButton(button);
  };

  return (
    <div>
      <section className='video-section'>
        <video autoPlay muted src="/assets/videos/video-page.mp4" />  

        <div className='video-container'>
          <h1>Create unrivalled shopping experiences for your consumers</h1>
        </div>
      </section>

      <section className='shop-section'>
        <h2>The way businesses and consumers shop has radically changed. Discover how top brands across multiple industries deliver an excellent digital-first customer experience with Tulfa.</h2>
      </section>

      <section className='section2'>
        <h2>Tulfa AR creates immersive and engaging eCommerce experiences</h2>

        <div>
          <img src= "/assets/images/nike-image.png" alt="nike" />
          <img src= "/assets/images/barn-image.png" alt="barn" />
          <img src= "/assets/images/MLB-image.png" alt="MLB" />
          <img src= "/assets/images/boomChicka-image.png" alt="BoomChicka" />
          <img src= "/assets/images/MHD-image.png" alt="MHD" />
        </div>
      </section>

      <section className='solutions-section'>

       <div className='solutions-text-container'>
        <h2>Discover our Solutions</h2>
        <h3>Scale your product content with the optimal solutions for e-commerce
        </h3>
       </div>

        <div className='solutions-images-container'>
          <Solutions
            imageSrc='/assets/images/metaverse-image.jpg'
            title='Metaverse Content Production'
            logoSrc='/assets/images/metaverse-logo.png'
          />
          <Solutions
            imageSrc='/assets/images/enhanced-image.jpg'
            title='Enhanced Brand Content'
            logoSrc='/assets/images/enhanced-logo.png'
          />
          <Solutions
            imageSrc='/assets/images/catalog-image.jpg'
            title='Catalog Management'
            logoSrc='/assets/images/catalog-logo.png'
          />
          <Solutions
            imageSrc='/assets/images/product-image.jpg'
            title='Product Imagery'
            logoSrc='/assets/images/product-logo.png'
          />
          <Solutions
            imageSrc='/assets/images/ar-image.jpg'
            title='AR Viewer'
            logoSrc='/assets/images/ar-logo.png'
            isSpecial={true}
          />
          <Solutions
            imageSrc='/assets/images/omnichannel-image.jpg'
            title='Omnichannel Commerce'
            logoSrc='/assets/images/omnichannel-logo.png'
          />
        </div>
      </section>

      <section className='media-section'>
        <div className="container">
          <MediaDisplay
            title='Metaverse Content Production'
            subtitle='InStore Immersive Activation'
            description='Tulfa’s AR feature was tailor-made to suit both the venue and the audience. With the easy-to-operate touchscreen scan interface, we brought live-action bees to Kate Spade customers!'
            buttonText='LEARN MORE ABOUT ar'
            mediaSrc='/assets/videos/inStore-video.mp4'
            mediaType='video'
          />

          <MediaDisplay
            title='3D Model Creation'
            subtitle='InStore Immersive Activation'
            description='The future of digital experiences is here. Tulfa’s 3D Lab provides you with an instant metaverse strategy by creating 3D models and other assets to help you sell your products faster. We create and deploy 3D models that work across platforms.' 
            buttonText='3d assets creation'
            mediaSrc='/assets/videos/product-video.mp4'
            mediaType='video'
          />

          <MediaDisplay
            title='3D Model Creation'
            subtitle='3D Product Configuration'
            description='It enables for product customization in terms of colors, materials, textures, sizes, pricing, and other factors. 3D Product Configuration generates stunning real-time 3D product visualizations.' 
            buttonText='3D Product Configuration'
            mediaSrc='/assets/images/3dProduct-image.png'
            mediaType='image'
          />

          <MediaDisplay
            title='Product Content'
            subtitle='Enhanced Content that Converts'
            description='We enhance your product listings and create digital experiences that transform your digital shelf. Check out our new video for a quick highlight of how we can help your eCommerce business succeed!' 
            buttonText='learn more about product content'
            mediaSrc='/assets/videos/enhanced-video.mp4'
            mediaType='video'
          />
        </div>
      </section>

      <section className="fortune-section">
        <div className="fortune-container">
          <h2>Trusted by top Fortune 500 clients from around the world</h2>
          <div className="carousel">
            <button className="carousel-button left" onClick={handlePrev}><ChevronLeft size={40} /></button>
            <div className="carousel-images">
              {logos.slice(currentIndex, currentIndex + 8).map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${index}`} />
              ))}
            </div>
            <button className="carousel-button right" onClick={handleNext}><ChevronRight size={40} /></button>
          </div>
          
          <button className="who-we-work-with">Who We Work With</button>
        </div>
      </section>

      <section className='info-section'>
        <div className='info-container'>
          <div className='info-top'>
            <div className='info-title'>
                <h2>Digital Transformation for All</h2>
                <p>Find optimum and convenient ways to adapt to the trend-setting digital revolutions.</p>
            </div>
            <div className='info-anchor'>
            {['3D Modeling', 'Augmented Reality', 'Product Imagery', 'Rich Media', 'Product Content'].map((label) => (
              <a
                key={label}
                onClick={() => handleButtonClick(label)}
                className={activeButton === label ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </div>
          </div>

          <div className="info-card">
            <InfoCard 
              title='Baby Crib - 3D Modeling / Augmented Reality'
              description='The potential of augmented reality is limitless. With augmented reality, give your shoppers the opportunity to feel and experience your products in their space.'
              image='/assets/images/info/baby-image.png'
            />
            <InfoCard 
              title='Kate Spade New York & Tulfa Inc | AR/VR | InStore Immersive Activation'
              description='This Summer, Tulfa and Kate Spade New York worked together to create an immersive, engaging experience for their Rockefeller Centre store in New York.'
              image='/assets/images/info/kate-image.png'
            />
            <InfoCard 
              title='HARLEY DAVIDSON HELMET - Timelapse Showreel by Tulfa Inc.'
              description='Our skilled 3D artists need only a few reference images to create high-quality product renders.'
              image='/assets/images/info/harley-image.png'
            />
            <InfoCard 
              title='NIKE - AR Ready 3D Model by Tulfa Inc'
              description='Augmented reality provides sellers the ability to set their products apart from the competition by offering consumers new shopping experiences.'
              image='/assets/images/info/nike-image.png'
            />
            <InfoCard 
              title='Hardware Category - CRL Products - 3D Modeling'
              description='Every day, from 6 continents across 20 industry verticals, our staff delivers next generation customer experience and helps companies better connect with their customers.'
              image='/assets/images/info/baby-image.png'
            />
            <InfoCard 
              title='Chicago Cubs Nike T-Shirt - Product Animation Showreel by Tulfa Inc.'
              description='Our team of 3D artists created this CGI product video to show off not one, not two, but three different shirts representing our hometown baseball team, the Chicago Cubs!'
              image='/assets/images/info/baby-image.png'
            />
          </div>

          <div className="info-btn">
            <button className="load-more">Load More</button>
          </div>
        </div>
      </section>

      <section className='contact-section'>
        <img src="/assets/images/contact-image.png" alt="contact image" />
      </section>
    </div>
  )
}

export default App;
