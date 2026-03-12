import React, { useState } from 'react';
import './blogs.css';

// Sample blog data – expand as needed
const blogPosts = [
  {
    title: 'How to Choose Cameras for Sports Broadcasting',
    description: 'A guide to selecting the best cameras for high-quality sports streaming.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop',
    category: 'Technology',
    link: '#',
    date: 'May 12, 2025'
  },
  {
    title: 'The Future of Sports Technology',
    description: 'Insights into emerging technologies shaping the sports industry.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop',
    category: 'Innovation',
    link: '#',
    date: 'April 28, 2025'
  },
  {
    title: 'Streaming Workflows for Live Events',
    description: 'Best practices for setting up reliable live streaming workflows.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop',
    category: 'Production',
    link: '#',
    date: 'April 10, 2025'
  },
  {
    title: 'Audio Essentials for Sports Broadcast',
    description: 'How to capture pristine audio in noisy stadium environments.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop',
    category: 'Audio',
    link: '#',
    date: 'March 22, 2025'
  }
];

const Blogs: React.FC = () => {
  return (
    <section className="blogs-section section-padding">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-slate-800">Blog</h1>
          <p className="lead text-muted">Insights, tips, and stories from the world of sports technology</p>
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <article className="blog-card h-100">
                <div className="blog-card__image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card__image" />
                  <span className="blog-card__category">{post.category}</span>
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