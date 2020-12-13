import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(iconRegistry:MatIconRegistry, sanitazer:DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitazer.bypassSecurityTrustResourceUrl("assets/iconmonstr-github-1.svg")
    );
   }

  ngOnInit(): void {
  }

  public redirectRepository= () => {
    window.open("https://github.com/jaimecuellar14/SensoWave","_blank");
  }
}
