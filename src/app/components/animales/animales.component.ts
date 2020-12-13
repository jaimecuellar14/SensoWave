import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  animales:any=[];
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.showMessage();
    setTimeout(() => {
      this.httpClient.get("assets/evaluation_data.json")
      .subscribe(data => {
        this.animales = data;
        this.closeMessage();
      })
    }, 1000);
  }

  filterAnimals = (gender:string) => {
    let listaAnimales=[];
    this.animales.map((item)=>{
      if(item.sex==gender.toUpperCase()){
        listaAnimales.push(item);
      }
    })
    return listaAnimales;
  }

  showMessage = () =>{
    this.snackBar.open("Cargando animales...","Cerrar");
  }

  closeMessage = () =>{
    this.snackBar.dismiss();
  }

  public goToList = (gender:string) => {
    console.log(`Yendo a lista de animales ${gender}`);
    let listaAnimales = this.filterAnimals(gender);
    this.router.navigate(['/animal-list'], {state:{data:listaAnimales}});
  }
}
