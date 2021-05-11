import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {
  constructor(private api: ApiCallService) {}
  returnedMovies = [{}];
  ngOnInit(): void {
    this.api.getPopularMovies().subscribe((data) => {
      data = data as any;
      console.log(data);
      this.setup(data);
    });
  }
  setup(apiReturn) {
    this.returnedMovies = apiReturn.results;
  }
}
