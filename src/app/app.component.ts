import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SensoWave';
  animals:any=[];
  constructor(private httpClient:HttpClient){

  }

  ngOnInit(){
    this.httpClient.get("assets/evaluation_data.json")
      .subscribe(data => {
        console.log(data);
        this.animals = data;
      })
  }
}


