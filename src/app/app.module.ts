import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AlertModule } from 'ngx-bootstrap';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MytodosComponent } from './components/mytodos/mytodos.component';
import { PrcticeComponent } from './components/prctice/prctice.component';

@NgModule({
  declarations: [
    AppComponent,
    MytodosComponent,
    PrcticeComponent,  
    HeaderComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
