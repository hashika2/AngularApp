import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogFormComponent } from './components/log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogsComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
