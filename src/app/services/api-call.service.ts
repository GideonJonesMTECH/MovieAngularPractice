import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(public http: HttpClient) {}

  apiKey = 'df4ebf811ebf0e45e5ff269e55b92800';

  getMovieById(id) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  searchMovieByName(name, pageNumb = '1') {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${name}&page=${pageNumb}&include_adult=false`
    );
  }
  public getPopularMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`
    );
  }
  public getImg(imgURL) {
    return `http://image.tmdb.org/t/p/original${imgURL}`;
  }
  public getGenres() {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`
    );
  }
}
