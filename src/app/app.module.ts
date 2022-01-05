import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { ControlsComponent } from './controls/controls.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';

@NgModule({
  declarations: [AppComponent, MapComponent, ControlsComponent, ArrayToStringPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
