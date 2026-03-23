import React, { useState } from 'react';
import './blogs.css';

// Sample blog data – expand as needed
const blogPosts = [
  {
    title: 'How High-Resolution Cameras Help Maximize Soccer Broadcasting Efficiency',
    description: 'The easy integration of high-resolution cameras is changing the game for soccer clubs of all sizes.  ',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2023/12/How-High-Resolution-Cameras-Help-Maximize-Soccer-Broadcasting-Efficiency.png',
    category: 'Technology',
    link: 'https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-help-maximize-soccer-broadcasting-efficiency/',
    date: 'February 15, 2024'
  },
  {
    title: 'How multi-camera systems are used in sports broadcasting',
    description: 'Multi-camera systems have changed sports broadcasting as they help capture various angles simultaneously, transition between camera feeds, provide replays, etc.  ',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2023/07/How-multi-camera-systems-are-used-in-sports-broadcasting-960x640.jpg',
    category: 'Innovation',
    link: 'https://www.e-consystems.com/blog/camera/applications/how-multi-camera-systems-are-used-in-sports-broadcasting/',
    date: 'October 12, 2023'
  },
  {
    title: 'Role of a camera in AI-driven automated sports broadcasting',
    description: 'Automated AI-based analytics is fast gaining momentum in sports broadcasting, given their benefits to viewing audiences as well as coaches and players. ',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2021/12/Role-of-a-camera-in-AI-driven-automated-sports-broadcasting-960x640.jpg',
    category: 'Production',
    link: 'https://www.e-consystems.com/blog/camera/applications/role-of-a-camera-in-ai-driven-automated-sports-broadcasting/',
    date: 'January 23, 2023'
  },
  {
    title: 'Integrating a synchronized multi-camera system into automated sports broadcasting systems',
    description: 'Automated sports broadcasting systems are gaining in popularity globally. They need a multi-camera system to stream live matches and capture images & videos for sports analytics purposes.',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2022/07/Integrating-a-synchronized-multi-camera-system-into-automated-sports-broadcasting-systems-01-960x640.jpg',
    category: 'Audio',
    link: 'https://www.e-consystems.com/blog/camera/applications/integrating-a-synchronized-multi-camera-system-into-automated-sports-broadcasting-systems/',
    date: 'October 27, 2022'
  },
  {
    title: 'Choosing the right camera for automated sports broadcasting – everything you need to know',
    description: 'Each decade has brought along embedded vision innovation to modernize sports broadcasting. Today, it’s all about automated AI-driven sports broadcasting.',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2021/12/Choosing-the-right-camera-for-automated-sports-broadcasting-1-960x640.jpg',
    category: 'Audio',
    link: 'https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-for-automated-sports-broadcasting-everything-you-need-to-know/',
    date: 'April 22, 2024'
  },
  {
    title: 'What is sports analytics? How is embedded vision reimagining it?',
    description: 'Embedded vision and sports analytics go hand-in-hand as the collected image and video data can help analyze player speed/performance, ball position, etc.',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2023/03/What-is-sports-analytics-How-is-embedded-vision-reimagining-it-960x640.jpg',
    category: 'Audio',
    link: 'https://www.e-consystems.com/blog/camera/applications/what-is-sports-analytics-how-is-embedded-vision-reimagining-it/',
    date: 'October 30, 2024'
  },
  {
    title: 'The Ultimate Guide to Golf Simulator Cameras: Enhancing Your Indoor Golf Experience',
    description: 'Indoor simulators must capture the nuanced motions of a golf swing to help players fine-tune their swings across weather conditions. ',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2024/11/The-Ultimate-Guide-to-Golf-Simulator-Cameras-Enhancing-Your-Indoor-Golf-Experience-1.jpg',
    category: 'Audio',
    link: 'https://www.e-consystems.com/blog/camera/applications/the-ultimate-guide-to-golf-simulator-cameras-enhancing-your-indoor-golf-experience/',
    date: 'November 27, 2024'
  },
   {
    title: 'Choosing the Right Camera Setup for Golf Swing Analysis',
    description: 'Golf simulator system providers and developers face many challenges when selecting the right golf camera setup. ',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2024/04/Choosing-the-Right-Camera-Setup-for-Golf-Swing-Analysis.png',
    category: 'Audio',
    link: 'https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-setup-for-golf-swing-analysis/',
    date: 'April 8, 2024'
  },
];

const Blogs: React.FC = () => {
  return (
    <section className="blogs-section section-padding">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-slate-800">Blog</h1>
          {/* <p className="lead text-muted">Insights, tips, and stories from the world of sports technology</p> */}
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <article className="blog-card h-100">
                <div className="blog-card__image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card__image" />
                  {/* <span className="blog-card__category">{post.category}</span> */}
                </div>
                <div className="blog-card__content">
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__description">{post.description}</p>
                  <div className="blog-card__meta">
                    {/* <span className="blog-card__date">{post.date}</span> */}
                    <a href={post.link} className="blog-card__link">Read More →</a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;