import { Component } from '@angular/core';
import { Card } from './card';
import { CardsService } from './cards.service';
import { CommonModule } from '@angular/common';
import { Ability } from './ability';
import { AbilityService } from './ability.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  providers: [CardsService,
              AbilityService            
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  cards!: Card[];
  abilitys!: Ability[];

  constructor(private cardService: CardsService, 
              private abilityService: AbilityService) {}
  
  ngOnInit(): void {
    this.cards = this.cardService.getCard();
    this.abilitys = this.abilityService.getSingleAbility();
  }

  cssVarIntializer(mastery: string, masteryPercent: string){
    document.documentElement.style.setProperty(mastery, masteryPercent)
  }

}
