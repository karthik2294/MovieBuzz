import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route } from '@angular/compiler/src/core';
import { IndexComponent } from './Components/index/index.component';
import { MoviedetailsComponent } from './Components/moviedetails/moviedetails.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'movieinfo', component: MoviedetailsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
