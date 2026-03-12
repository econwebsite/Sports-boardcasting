import React, { useState } from 'react';
import './videos.css';

// Sample video data with YouTube IDs
const videos = [
  {
    title: 'Automated Sports Streaming Explained',
    videoId: 'ywqjrm73xQM', // Replace with real IDs
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  },
  {
    title: 'Behind the Scenes: Sports Broadcast',
    videoId: 'ywqjrm73xQM',
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  },
  {
    title: 'Interview with a Sports Technologist',
    videoId: 'ywqjrm73xQM',
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  },
  {
    title: 'Live Demo: Remote Production Setup',
    videoId: 'ywqjrm73xQM',
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  },
  {
    title: 'The Evolution of Sports Cameras',
    videoId: 'ywqjrm73xQM',
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  },
  {
    title: 'How to Stream a Stadium Event',
    videoId: 'ywqjrm73xQM',
    thumbnail: 'https://img.youtube.com/vi/ywqjrm73xQM/maxresdefault.jpg'
  }
];

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ videoId: string; title: string } | null>(null);

  const openModal = (videoId: string, title: string) => {
    setSelectedVideo({ videoId, title });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="videos-section section-padding">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-slate-800">Related Videos</h1>
          <p className="lead text-muted">Watch our latest explainers, demos, and behind-the-scenes content</p>
        </div>

        {/* Video Grid */}
        <div className="row g-4">
          {videos.map((video, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="video-card" onClick={() => openModal(video.videoId, video.title)}>
                <div className="video-card__thumbnail-wrapper">
                  <img src={video.thumbnail} alt={video.title} className="video-card__thumbnail" />
                  <div className="video-card__play-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* YouTube logo placeholder – you can use an actual logo image */}
                  <div className="video-card__youtube-logo">YouTube</div>
                </div>
                <div className="video-card__content">
                  <h3 className="video-card__title">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Fancybox-style popup */}
        {selectedVideo && (
          <div className="video-modal" onClick={closeModal}>
            <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
              <button className="video-modal__close" onClick={closeModal}>×</button>
              <h3 className="video-modal__title">{selectedVideo.title}</h3>
              <div className="video-modal__iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;