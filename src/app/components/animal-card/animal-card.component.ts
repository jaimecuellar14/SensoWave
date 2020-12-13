import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  

  constructor() { }

  @Input() name:string;
  @Input() birth:string;
  @Input() sex:string;
  @Input() age:string;
  @Input() createdAt: string;
  @Input() updatedAt: string;
  @Input() legalId:string;
  @Input() genus:string

  ngOnInit(): void {
  }

}
