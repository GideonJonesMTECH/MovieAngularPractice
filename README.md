# MovieAPIPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# MovieAngularPractice

## App Specific Requirements:

The goals of Movie API is to display details about searched for movies, and allow a user to rate, comment, etc. about each movie. Your app must have a minimum of four different pages, but you can add more pages/details than are listed here if you would like. It is up to you how you route between pages 2-4.

1. The first page (only page that order matters) that the user sees should be a login page to login with Firebase Google Auth.
2. The second page should use the ‘/search/movie’ endpoint for all searches. Allow the user to enter a movie title to search against. Once a response has returned from the endpoint, display basic movie details such as the movie image, title, and runtime for each movie. To prevent the user from seeing a blank page upon arriving at the search page, use the ‘/movie/top-rated’ API when the page initially loads to start the page off with content.
3. The third page should use the ‘/movie/movie_id’ end point. After a user searches a movie title, if the user clicks one of the movies, it should take them to a movie details page. This page should show the user as many details as possible about the movie along with YouTube trailers associated with the movie. The user should also be able to rate, comment, click whether they have seen the movie before, and click if they’re interested in seeing the movie in the future.
4. The fourth page should be divided up into two sections. One section will be all of the movies that the user has already seen, and the second section will be all of the movies the user is still interested in seeing. Use the ‘/movie/movie_id’ to help request the associated data. Clicking any of these movies should be able to route to the movie details page. The user should be able to rate, comment, and change that they’re interested in seeing it to either has already seen it or is no longer interested in seeing it (should remove it from this page).
