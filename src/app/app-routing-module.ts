import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Studentlist } from './studentlist/studentlist'; 

const routes: Routes = [
  {path:'',component:Home},
  {path:'studentlist', component: Studentlist }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
