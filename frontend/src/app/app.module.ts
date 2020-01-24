import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewerPageComponent } from './viewer-page/viewer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ListPageComponent,
    ViewerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
