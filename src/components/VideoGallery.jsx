import React, { useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const VideoGallery = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // optional: customize here
      Toolbar: {
        display: [
          { id: "counter", position: "center" },
          "close",
        ],
      },
      YouTube: {
        autoplay: true,
      }
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, []);

  return (
    <section className="hero-section">
      <h1 className="animated-heading">
        <span className="icon">▶</span> Watch Our <span className="highlight">Latest Drops!</span>
      </h1>

      <div className="video-list">
        <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=e6T34u51MaA" className="video-thumb">
          <img src="https://img.youtube.com/vi/e6T34u51MaA/hqdefault.jpg" alt="Video 1" />
          <div className="play-icon"></div>
        </a>

        <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=2Eme-IkdPhM" className="video-thumb">
          <img src="https://img.youtube.com/vi/2Eme-IkdPhM/hqdefault.jpg" alt="Video 2" />
          <div className="play-icon"></div>
        </a>

        <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=V9-wiMHcJ_k" className="video-thumb">
          <img src="https://img.youtube.com/vi/V9-wiMHcJ_k/hqdefault.jpg" alt="Video 3" />
          <div className="play-icon"></div>
        </a>

        <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=aaVLuXKJ8x0" className="video-thumb">
          <img src="https://img.youtube.com/vi/aaVLuXKJ8x0/hqdefault.jpg" alt="Video 4" />
          <div className="play-icon"></div>
        </a>
      </div>
    </section>
  );
};

export default VideoGallery;
