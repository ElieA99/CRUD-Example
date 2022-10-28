import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { NavbarComponent } from './navbar/navbar.component';
 

const routes: Routes = 
[
  {path:'', redirectTo: '/navbar', pathMatch: 'full' },
  {path:'navbar',component:NavbarComponent},
  {path:'add',component:AddComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
