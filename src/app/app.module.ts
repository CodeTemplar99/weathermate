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
import { cordReducer, locationReducer } from './reducers/reducer';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { CordService} from './services/cordweather.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { CordsWeatherComponent } from './cords-weather/cords-weather.component';
import { FutureWeatherComponent } from './future-weather/future-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CurrentWeatherComponent,
    CordsWeatherComponent,
    FutureWeatherComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer,
      lat: cordReducer,
      lon: cordReducer
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
    WeatherService,
    CordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }