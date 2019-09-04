import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './mainweather/weather/weather.component';
import { FavoritesComponent } from './mainweather/favorites/favorites.component';
import { WeatherRouterModule, appRoutes} from './mainweather/weather-router/weather-router.module';
import { MainweatherComponent } from './mainweather/mainweather.component';
import { RouterModule,Routes } from '@angular/router';
import { WeatherServiceService } from './mainweather/weather-service.service'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavoritesComponent,
    MainweatherComponent,
    //BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    WeatherRouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
