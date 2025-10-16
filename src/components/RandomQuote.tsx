// src/components/RandomQuote.tsx
import React, { useState, useEffect } from 'react';
import type { BearQuote } from '../types/Bear';
import quotesData from '../data/bears_quotes.json';

const RandomQuote: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<BearQuote | null>(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.bears.length);
    setCurrentQuote(quotesData.bears[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (!currentQuote) return null;

  return (
    <div className="card mb-4 border-primary">
      <div className="card-body text-center">
        <h2 className="h4 text-primary mb-3">🐻 Random Bear Quote</h2>
        <blockquote className="blockquote mb-3">
          <p className="mb-2">"{currentQuote.quotation}"</p>
          <footer className="blockquote-footer">
            <cite title="Source">{currentQuote.source}</cite>
          </footer>
        </blockquote>
        <button 
          className="btn btn-primary"
          onClick={getRandomQuote}
        >
          New Quote ...
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
