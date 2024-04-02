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
        id: 0,
        ability: "HTML",
        imgUrl: "",
        mastery: "100",
      },
      {
        id: 1,
        ability: "CSS",
        imgUrl: "",
        mastery: "60",
      },
      {
        id: 2,
        ability: "JavaScript",
        imgUrl: "",
        mastery: "60",
      },
      {
        id: 3,
        ability: "Typescript",
        imgUrl: "",
        mastery: "30",
      },
      {
        id: 4,
        ability: "Java",
        imgUrl: "",
        mastery: "20",
      },
      {
        id: 5,
        ability: "Angular",
        imgUrl: "",
        mastery: "40",
      },
    ]
  }
}
