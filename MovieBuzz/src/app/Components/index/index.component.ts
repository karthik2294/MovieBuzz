import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../modals/movie';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private bannerBg = '../../../assets/Images/banner-bg1.png';
  public movies: IMovie[];
  constructor(private _apiservice: ApiService) { }

  ngOnInit() {
   this.movies = this._apiservice.getMovieList();
  }

}
