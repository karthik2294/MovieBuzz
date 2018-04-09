import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route } from '@angular/compiler/src/core';
import { IndexComponent } from './Components/index/index.component';
import { MoviedetailsComponent } from './Components/moviedetails/moviedetails.component';


import { ApiService } from './api.service';
import { ConfigService } from './config.service';

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
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
