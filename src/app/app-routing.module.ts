import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytodosComponent } from './components/mytodos/mytodos.component';
import { PrcticeComponent } from './components/prctice/prctice.component';



const routes: Routes = [
      {path : '' , component : MytodosComponent},
      // {path : '' , redirectTo : 'todolist' , pathMatch : 'full'}, 
      {path : 'practicets' , component : PrcticeComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
