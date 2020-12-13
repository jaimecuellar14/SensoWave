import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AnimalesComponent } from '../components/animales/animales.component';
import { AnimalListComponent } from '../components/animal-list/animal-list.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'animales' , component: AnimalesComponent },
  { path: 'animal-list', component:AnimalListComponent},
  { path: '', redirectTo:'/home', pathMatch:'full' },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class RoutingModule { }
