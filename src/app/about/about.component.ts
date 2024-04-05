import { Component, Renderer2 } from '@angular/core';
import { Card } from './card';
import { CardsService } from './cards.service';
import { CommonModule } from '@angular/common';
import { Ability } from './ability';
import { AbilityService } from './ability.service';
import { OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { log } from 'console';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,
            MatCardModule,            
  ],
  providers: [CardsService,
              AbilityService,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  cards!: Card[];
  abilitys!: Ability[];
  i: number = 0;

  constructor(private cardService: CardsService, 
              private abilityService: AbilityService,
              private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.cards = this.cardService.getCard();
    this.abilitys = this.abilityService.getSingleAbility();
  }

  cardShuffle(id: string) {
    const card1 = document.getElementById("3"); 
    const card2 = document.getElementById("2"); 
    const card3 = document.getElementById("1"); 
    const card4 = document.getElementById("0"); 
    
    this.i++;
    let card = document.getElementById(id);
    this.renderer.addClass(card, `noDisplay${id}`);
    if (this.i == 4) {
      this.renderer.removeClass(card1, "noDisplay3");
      this.renderer.removeClass(card2, "noDisplay2");
      this.renderer.removeClass(card3, "noDisplay1");
      this.renderer.removeClass(card4, "noDisplay0");
      this.i = 0
    }
    
  }



}
