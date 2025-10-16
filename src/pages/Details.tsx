// src/pages/Details.tsx 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import type { Bear } from '../types/Bear';

const Details: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [bear, setBear] = useState<Bear | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBear = async () => {
      try {
        const response = await axios.get('https://bearsapi.ryanhunter.ca/bears');
        const foundBear = response.data.bears.find((b: Bear) => b.page_slug === slug);
        setBear(foundBear || null);
      } catch (error) {
        console.error('Error fetching bear details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBear();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!bear) {
    return (
      <div className="container mt-4">
        <h1 className="text-primary">Bear Not Found</h1>
        <p>The bear species you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <img 
            src={bear.bear_img2} 
            alt={bear.bear_type}
            className="img-fluid mb-4"
            style={{ width: '800px', height: 'auto', objectFit: 'cover' }}
          />
          
          <h1 className="text-primary">{bear.bear_type}</h1>
          <p className="lead">{bear.scientific_name}</p>
          <p><strong>Weight:</strong> {bear.weight}</p>
          <p>
            <strong>Wikipedia:</strong>{' '}
            <a href={bear.wiki} target="_blank" rel="noopener noreferrer" className="text-primary">
              Learn more on Wikipedia
            </a>
          </p>
          <p><strong>Size:</strong> {bear.size}</p>
          <div 
            className="synopsis-content"
            dangerouslySetInnerHTML={{ __html: bear.synopsis }}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
