import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  animales:any=[];
  animalesMostrar:any=[];
  genderSelected:boolean=false;
  tiposAnimales:Array<Object> = [
    {type:"COW",url:"../../../assets/vaca-avatar.jpg"},
    {type:"HORSE",url:"../../../assets/horse-avatar.png"},
    {type:"DOG",url:"../../../assets/dog-avatar.png"},
    {type:"CAT",url:"../../../assets/cat-avatar.png"}];
  
  existAnimal:boolean=false;
  seleccion:any;
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private router:Router,
    iconRegistry:MatIconRegistry, sanitizer:DomSanitizer) {
      iconRegistry.addSvgIcon(
        'female',
        sanitizer.bypassSecurityTrustResourceUrl("assets/female-gender.svg")
      );
      iconRegistry.addSvgIcon(
        'male',
        sanitizer.bypassSecurityTrustResourceUrl("assets/male-gender.svg")
      );
     }


  /**
   * Cargamos los datos utilizando httpClient de angular.
   */
  ngOnInit(): void {
    this.showMessage();
      this.httpClient.get("assets/evaluation_data.json")
      .subscribe(data => {
        this.animales = data;
        this.closeMessage();
      })
  }

  /**
   * 
   * @param gender 
   * Funcion que coge el genero a filtrar.
   * Y devuelve un array con todos los animales que corresponden a dicho genero.
   */
  filterAnimals = (gender:string) => {
    let listaAnimales=[];
    this.animales.map((item)=>{
      if(item.sex==gender.toUpperCase()){
        listaAnimales.push(item);
      }
    })
    return listaAnimales;
  }

  /**
   * Mostramos un mensaje mientras cogemos los datos.
   */
  showMessage = () =>{
    this.snackBar.open("Cargando animales...","Cerrar");
  }
  /**
   * Cerramos el mensaje.
   */
  closeMessage = () =>{
    this.snackBar.dismiss();
  }

  /**
   * 
   * @param type (tipo animal. ej:vaca, caballo, etc)
   * Funcion que verifica que el tipo de animal seleccionado exista.
   */
  public showAnimals = (type) => {
    for(let i=0; i<this.animales.length;i++){
      if(this.animales[i].genus==type){
        this.existAnimal=true;
        break;
      }else{
        this.existAnimal=false;
      }
    }
  }
  public goToList = (gender:string) => {
    console.log(`Yendo a lista de animales ${gender}`);
    let listaAnimales = this.filterAnimals(gender);
    this.router.navigate(['/animal-list'], {state:{data:listaAnimales}});
  }

  /**
   * 
   * @param seleccion (Del select, masculino o femenino)
   * Funcion que se encarga de coger la seleccion de genero
   * Para luego mostrar en la vista la lista de animales
   * Segun su genero
   */
  public selectGender = (seleccion) => {
    console.log(seleccion);
    this.genderSelected =true;
    this.animalesMostrar = this.filterAnimals(seleccion);
    console.log(this.animales); 
  }
}
