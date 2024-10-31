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
    </div>
  )
}

export default App;
