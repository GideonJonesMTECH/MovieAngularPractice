export interface MovieIdAPIReturn {
  adult: Boolean;
  backdrop_path: String;
  belongs_to_collection;
  budget: String;
  genres: Array<Number>;
  homepage: String;
  id: Number;
  imdb_id: String;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  production_companies: Array<Object>;
  production_countries: Array<Object>;
  release_date: String;
  revenue: String;
  runtime: Number;
  spoken_languages: Array<Object>;
  status: String;
  tagline: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}
