import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ItemsComponent } from './component/items/items.component';
import { AddItemsComponent } from './component/add-items/add-items.component';

const routes: Routes = [
  { path: "", component: HomeComponent ,pathMatch:"full"},
  { path: "Items", component: ItemsComponent },
  { path:"add-items",component:AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
