import { Injectable } from '@angular/core';
import { Ability } from './ability';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor() { }
  getSingleAbility(): Ability[] {
    return [
      {
        ability: "HTML",
        imgUrl: "",

      },
      {
        ability: "CSS",
        imgUrl: "",
      },
      {
        ability: "JavaScript",
        imgUrl: "",
      },
      {
        ability: "Typescript",
        imgUrl: "",
      },
      {
        ability: "Java",
        imgUrl: "",
      },
      {
        ability: "Angular",
        imgUrl: "",
      },
    ]
  }
}
