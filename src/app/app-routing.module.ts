import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MushroomIdentificationComponent} from "./mushroom-identification/mushroom-identification.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "mushroomIdentification", component: MushroomIdentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
