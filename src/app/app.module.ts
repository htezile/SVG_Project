import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatSelectModule } from '@angular/material';
import { ContainerComponent } from './container/container.component';
import { SvgComponent } from './svg/svg.component';
import { SvgTitleComponent } from './svg-title/svg-title.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { MatTabsModule } from '@angular/material';
import { WeatherDataService } from './weather-data.service'  
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    SvgComponent,
    SvgTitleComponent,
    WeatherDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, 
    MatCheckboxModule,
     MatToolbarModule, 
     MatSidenavModule,
      MatListModule, 
      MatIconModule, 
      MatSelectModule ,
      MatTabsModule,
      HttpClientModule
  ],
  providers: [
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
