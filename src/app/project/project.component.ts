import { Component, ViewChild } from '@angular/core';

import { AppliMeteoComponent } from './meteo/meteo.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    AppliMeteoComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  ville: string = "";
  showMeteo: boolean = true;
  meteoReset: boolean = true;

  @ViewChild(AppliMeteoComponent) child!: AppliMeteoComponent
  
  constructor () {}


  showMeteoo() {

      this.showMeteo = !this.showMeteo;
      this.child.fetchMeteo("Bordeaux");

  }
}
