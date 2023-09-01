import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';


const routes: Routes = [
  {path: "", component: HeaderComponent},
  {path: "", component: ProductsComponent},
  {path: "headerComponent", component: HeaderComponent},
  {path: "productComponent", component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
