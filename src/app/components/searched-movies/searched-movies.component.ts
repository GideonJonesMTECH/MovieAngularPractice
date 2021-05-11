import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchedReturn } from 'src/app/interfaces/searched-return';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-searched-movies',
  templateUrl: './searched-movies.component.html',
  styleUrls: ['./searched-movies.component.scss'],
})
export class SearchedMoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiCallService) {}
  searched = '';
  returnedMovies = [{}];
  ngOnInit(): void {
    this.searched = this.route.snapshot.paramMap.get('searched');
    console.log(this.searched);
    this.api.searchMovieByName(this.searched).subscribe((data) => {
      const searchedData = data as SearchedReturn;
      console.log(searchedData);
      this.returnedMovies = searchedData.results;
    });
  }
}
