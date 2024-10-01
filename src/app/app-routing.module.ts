import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProductsComponent} from "./product/products/products.component";

const routes: Routes = [
  {path : "home",component:HomeComponent},
  {path :"product/:id",component:ProductsComponent},
  {path :"", redirectTo : "home",pathMatch:"full"},
  {path : "**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
