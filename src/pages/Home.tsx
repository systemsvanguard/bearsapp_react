// src/pages/Home.tsx 
/* Current unfixed error : Uncaught TypeError: Cannot read properties of undefined (reading 'map') at Home */
/* See also https://medium.com/@genildocs/error-type-only-import-typescript-stop-struggling-with-this-aaaad7eb53c9 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RandomQuote from '../components/RandomQuote';
import BearCard from '../components/BearCard';
import type { Bear } from '../types/Bear';

const Home: React.FC = () => {
  const [bears, setBears] = useState<Bear[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBears = async () => {
      try {
        const response = await axios.get('https://bearsapi.ryanhunter.ca/bears');
        setBears(response.data.bears);
      } catch (error) {
        console.error('Error fetching bears:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBears();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-primary mb-4">Home - Bears of the World</h1>
      
      <RandomQuote />
      
      <div className="row">
        <div className="col-12">
          <h2 className="text-primary h4 mb-3">Explore Bear Species</h2>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {bears.map(bear => (
            <BearCard key={bear.id} bear={bear} />
          ))}
        </div>
      )}

      <div className="row mt-4">
        <div className="col-12">
          <img 
            src="https://bearsapi.ryanhunter.ca/images/site_about.webp" 
            alt="About Bears" 
            className="img-fluid mb-3"
            style={{ width: '800px', height: '615px', objectFit: 'cover' }}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
