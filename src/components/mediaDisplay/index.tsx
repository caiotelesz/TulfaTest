import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './style.scss';

interface MediaDisplayProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
}

export function MediaDisplay({ title, subtitle, description, buttonText, mediaSrc, mediaType }: MediaDisplayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Toggle video play/pause and button visibility
  function handlePlayVideo() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      setPlay(true);
      videoRef.current.play();
      setShowButton(false);
    } else {
      setPlay(false);
      videoRef.current.pause();
      setShowButton(true);
    }
  }

  // When the mouse is over the video, the pause button will apear
  function handleMouseEnter() {
    if (play) {
      setShowButton(true);
    }
  }

  // button when the mouse leaves the video area
  function handleMouseLeave() {
    if (play) {
      setShowButton(false);
    }
  }

  return (
    <div className="media-container">
      <div className="media-info">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>

        <a href="#">{buttonText}</a>
      </div>

      <div className="media-content">
        {mediaType === 'image' ? (
          <img src={mediaSrc} alt="Media Content" className="media-image" />
        ) : (
          <div
            className="media-video"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showButton && (
              <button onClick={handlePlayVideo}>
                {!play ? <Play fill="rgba(0, 0, 0, 0.5)" /> : <Pause fill="rgba(0, 0, 0, 0.5)" />}
              </button>
            )}
            <video src={mediaSrc} ref={videoRef} width="500" height="280">
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
