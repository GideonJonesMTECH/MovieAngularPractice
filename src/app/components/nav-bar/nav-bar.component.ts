import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchSubmit() {
    const searchBox = document.getElementById('searchBox') as HTMLInputElement;
    const searchReturn = searchBox.value;
    console.log(`Search Submitted: ${searchReturn}`);
    this.router.navigateByUrl(`search/${searchBox.value}`);
  }
}
