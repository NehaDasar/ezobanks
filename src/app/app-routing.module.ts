import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AtmComponent } from './atm/atm.component';




const routes: Routes = [
 
  {path: "headerComponent", component: HeaderComponent},
  {path: "atm", component: AtmComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
