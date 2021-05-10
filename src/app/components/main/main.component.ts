import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private api: ApiCallService) {}
  moviePoster;
  movieBackdrop;
  ngOnInit(): void {
    this.api.getPopularMovies().subscribe((data) => {
      console.log(data);
    });
    this.api.getMovieById(`460465`).subscribe((data: any) => {
      data = data as any;
      this.setup(data);
    });
  }

  setup(movieData) {
    this.movieBackdrop = this.api.getImg(movieData.backdrop_path);
    this.moviePoster = this.api.getImg(movieData.poster_path);
  }
}
