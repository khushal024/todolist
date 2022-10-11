import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [

  { path: '', component: TodolistComponent },
  { path: 'practicets', component: PracticeComponent, },
  { path: 'form', component: FormComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
