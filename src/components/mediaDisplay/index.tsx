import { useRef, useState } from 'react';
import './style.scss';
import { Pause, Play } from 'lucide-react';

interface MediaDisplayProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
}



export function MediaDisplay({ mediaSrc, mediaType }: MediaDisplayProps) {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  function handlePlayVideo() {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      setPlay(true);
      videoRef.current.play();
    } else {
      setPlay(false);
      videoRef.current.pause();
    }
  }

  return(
    <div className='media-container'>
      <div className='media-info'>
        <h2>Metaverse Content Production</h2>
        <h3>InStore Immersive Activation</h3>
        <p>Tulfa’s AR feature was tailor-made to suit both the venue and the audience. With the easy-to-operate touchscreen scan interface, we brought live-action bees to Kate Spade customers!</p>

        <a href="#">Learn more about ar</a>
      </div>

      <div className='media-content'>
        {mediaType == 'image' ? (
          <img src={mediaSrc} alt="Media Content" className='media-image'/>
        ) : (
          <div className="media-video">
            <button onClick={handlePlayVideo}>{!play ? ( <Play fill='rgba(0, 0, 0, 0.25)' /> ) : ( <Pause fill='rgba(0, 0, 0, 0.25)'/> )}</button>

            <video src={mediaSrc} ref={videoRef} >
              <source src="/assets/videos/product-video.mp4" type="video/mp4" />
              <track
                src="/assets/videos/product-video.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}