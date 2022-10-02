import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [

  { path: '', component: TodolistComponent },
  { path: 'practicets', component: PracticeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
