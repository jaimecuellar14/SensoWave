import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  xpanded:boolean=false;

  constructor() { }

  @Input() name:string;
  @Input() date_birth:string;
  @Input() sex:string;
  @Input() age:string;
  @Input() createdAt: string;
  @Input() updatedAt: string;
  @Input() legalId:string;
  @Input() genus:string;
  @Input() data:any;

  ngOnInit(): void {
  }
  public showMore = () => {
    this.xpanded = this.xpanded?false:true;
  }
}
