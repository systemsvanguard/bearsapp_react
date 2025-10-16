// src/types/Bear.ts
export interface Bear {
  id: number;
  bear_type: string;
  scientific_name: string;
  bear_img1: string;
  bear_img2: string;
  page_slug: string;
  wiki: string;
  weight: string;
  size: string;
  geo_range: string;
  synopsis: string;
}

export interface BearQuote {
  id: number;
  source: string;
  quotation: string;
}

export interface BearsResponse {
  bears: Bear[];
}

export interface QuotesResponse {
  bears: BearQuote[];
}
