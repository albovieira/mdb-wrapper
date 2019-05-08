export enum Languages {
  ENG_US = 'en-US',
}

export interface ServiceConfig {
  url: string;
  token: string;
  timeout: string;
}

export interface QueryRequest {
  page?: number;
  language: string | Languages.ENG_US;
  query?: string;
}

export interface ResponseMoviesUpcoming{
  page: number | 1;
  dates: Object;
  results: [Movie];
  total_pages: number;
  total_results:number;
}

export interface ResponseMovieDetails extends MovieDetails{}

export interface ErrorResponse {
  status_message: string;
  success: boolean;
  status_code: number;
}

interface Genre{
  id: number;
  name: string;
}

interface ProductionCompanies{
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: [];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieDetails{
  adult: string;
  backdrop_path: string;
  belongs_to_collection?: string;
  budget: number;
  genres: [Genre];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: [ProductionCompanies];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface HashParams {
  language: string;
  page?:number;
  movieId?:string;
  query?:string;
}
