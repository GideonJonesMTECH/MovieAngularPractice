import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { MovieIdAPIReturn } from 'src/app/interfaces/movie-id-apireturn';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  faImdb = faImdb;
  faLink = faLink;
  constructor(private route: ActivatedRoute, private api: ApiCallService) {}
  movieData = {};
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getMovieById(id).subscribe((data) => {
      this.setup(data as MovieIdAPIReturn);
    });
  }
  setup(movieDataFromAPI) {
    movieDataFromAPI.income =
      movieDataFromAPI.revenue - movieDataFromAPI.budget;
    movieDataFromAPI.revenue = movieDataFromAPI.revenue.toLocaleString('en');
    movieDataFromAPI.budget = movieDataFromAPI.budget.toLocaleString('en');
    movieDataFromAPI.income = movieDataFromAPI.income.toLocaleString('en');

    this.movieData = movieDataFromAPI;
    console.log(movieDataFromAPI);
  }
}
