import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animales:any;
  constructor(private router:Router) {
    this.animales = this.router.getCurrentNavigation().extras.state['data'];
    console.log(this.animales);
   }

  ngOnInit(): void {
  }

}
