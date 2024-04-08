import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CompetencesComponent } from './competences/competences.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { MotivationsComponent } from './motivations/motivations.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CompetencesComponent,
    ParcoursComponent,
    MotivationsComponent            
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  isCompetences : boolean = true;
  isMotivations : boolean = false;
  isParcours : boolean = false;
  a: string="a";
  b: string="b";
  c: string="d"

  showComponent(activeComponent: string) {
    
    if(activeComponent == this.a) {
      this.isCompetences=true;
      this.isMotivations=false;
      this.isParcours=false;
    }
    if(activeComponent == this.b) {
      this.isMotivations=true;
      this.isCompetences=false;
      this.isParcours=false;
    }
    if(activeComponent == this.c) {
      this.isParcours=true;
      this.isMotivations=false;
      this.isCompetences=false;
    }

  }


  }




