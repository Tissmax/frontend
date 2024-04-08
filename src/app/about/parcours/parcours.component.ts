import { Component, Renderer2 } from '@angular/core';
import { Card } from './card';
import { CardsService } from './cards.service';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    CardsService
  ],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css'
})
export class ParcoursComponent {

  cards!: Card[];
  i: number = 0;

  constructor (private cardService: CardsService,
                private renderer: Renderer2) {}
  ngOnInit(): void {
    this.cards = this.cardService.getCard();
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
