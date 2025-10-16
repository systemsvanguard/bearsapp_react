// src/components/BearCard.tsx
import React from 'react';
import type { Bear } from '../types/Bear';
import { Link } from 'react-router-dom';

interface BearCardProps {
  bear: Bear;
}

const BearCard: React.FC<BearCardProps> = ({ bear }) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={bear.bear_img1} 
          className="card-img-top" 
          alt={bear.bear_type}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{bear.bear_type}</h5>
          <p className="card-text">
            {truncateText(bear.synopsis.replace(/<[^>]*>/g, ''), 60)}
          </p>
        </div>
        <div className="card-footer bg-transparent">
          <Link 
            to={`/details/${bear.page_slug}`} 
            className="btn btn-primary btn-sm"
          >
            See More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BearCard;
