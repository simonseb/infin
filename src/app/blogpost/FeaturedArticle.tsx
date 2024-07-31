// components/FeaturedArticle.tsx

import Image from 'next/image';
import { FC } from 'react';

const FeaturedArticle: FC = () => {
  return (
    <div className="featured-article">
      <div className="content">
        <h3>FEATURED ARTICLES</h3>
        <h1>The Impact of Custom Orthotics on Athletic Performance</h1>
        <p>
          If left unaddressed, your foot conditions can rapidly spiral out of
          control leading to various painful, interrelated problems. Our
          world-class podiatrists base your personalized orthotic designs on
          your current foot conditions.
        </p>
      </div>
      <div className="pagination">
        <button>&larr;</button>
        <span>1/3</span>
        <button>&rarr;</button>
      </div>
      <div className="image-container">
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Featured Article"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <style jsx>{`
        .featured-article {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          color: #fff;
        }

        .content {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 10;
        }

        .content h3 {
          font-size: 16px;
          text-transform: uppercase;
          margin: 0;
          margin-bottom: 10px;
        }

        .content h1 {
          font-size: 36px;
          margin: 0;
          margin-bottom: 20px;
        }

        .content p {
          font-size: 16px;
          line-height: 1.5;
        }

        .pagination {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          z-index: 10;
        }

        .pagination button {
          background: none;
          border: none;
          color: #fff;
          font-size: 24px;
          margin: 0 10px;
          cursor: pointer;
        }

        .pagination span {
          font-size: 16px;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default FeaturedArticle;
