import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HeaderComponent } from './components/header/header.component';
import { PracticeComponent } from './components/practice/practice.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ChildcompComponent } from './components/childcomp/childcomp.component';
import { KidComponent } from './components/childcomp/kid/kid.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HeaderComponent,
    PracticeComponent,
    FormComponent,
    ChildcompComponent,
    KidComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
