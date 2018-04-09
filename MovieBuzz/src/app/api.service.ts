import { Injectable } from '@angular/core';
import { IMovie } from './modals/movie';

@Injectable()
export class ApiService {

  private movieList: IMovie[] = [
    {
      name: 'Infinity War',
      photoPath: 'assets/Images/Posters/1.jpg'
    },
    {
      name: 'Black Panther',
      photoPath: 'assets/Images/Posters/2.jpg'
    },
    {
      name: 'Civil War',
      photoPath: 'assets/Images/Posters/3.jpg'
    },
    {
      name: 'Winter soldier',
      photoPath: 'assets/Images/Posters/4.jpg'
    },
    {
      name: 'Rognak',
      photoPath: 'assets/Images/Posters/5.jpg'
    },
    {
      name: 'Ant Man 2',
      photoPath: 'assets/Images/Posters/6.png'
    },
    {
      name: 'GOG',
      photoPath: 'assets/Images/Posters/7.jpg'
    },
    {
      name: 'HULK',
      photoPath: 'assets/Images/Posters/8.jpg'
    },
    {
      name: 'First Avengers',
      photoPath: 'assets/Images/Posters/9.jpg'
    },
    {
      name: 'Iron Man',
      photoPath: 'assets/Images/Posters/10.jpg'
    },
    {
      name: 'Wolverine',
      photoPath: 'assets/Images/Posters/11.jpg'
    },
    {
      name: 'Iron Man 2',
      photoPath: 'assets/Images/Posters/12.jpg'
    }
  ];
  constructor() { }



 getMovieList(): IMovie[] {
   return this.movieList;
 }

}
