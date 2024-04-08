import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ability } from './ability';
import { AbilityService } from './ability.service';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    AbilityService,
],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  
  abilitys!: Ability[];

  constructor(private abilityService: AbilityService,) {}
  
  ngOnInit(): void {
    this.abilitys = this.abilityService.getSingleAbility();
  }

}
