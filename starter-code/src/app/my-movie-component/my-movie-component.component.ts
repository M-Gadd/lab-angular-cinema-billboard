import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: string;
  movieInfo: Movie;

  constructor(
    public movieBlah: MoviesService,
    private send: Router,
    private request: ActivatedRoute
  ) {}

  ngOnInit() {
    this.request.paramMap.subscribe((myParams) => {
      this.movieId = myParams.get('movieId')
      this.movieInfo =  this.movieBlah.getMovie(this.movieId)
      // this.movieInfo = {
      //   title: mostafa
      
  });
}

}
