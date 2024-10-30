import './style.scss';
import { Solutions }  from '../components/solutions';
import { MediaDisplay } from '../components/mediaDisplay';

function App() {

  return (
    <div>
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
            mediaSrc='/assets/videos/inStore-video.mp4'
            mediaType='video'
          />
        </div>
      </section>
    </div>
  )
}

export default App;
