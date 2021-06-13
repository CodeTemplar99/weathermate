import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatToolbarModule,
//   MatInputModule,
//   MatTabsModule,
//   MatCardModule,
//   MatDividerModule,
//   MatListModule
// } from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './reducers/reducer';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CurrentWeatherComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    FormsModule,
    // MatInputModule,
    // MatTabsModule,
    // MatCardModule,
    HttpClientModule,
    // MatDividerModule,
    // MatListModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }