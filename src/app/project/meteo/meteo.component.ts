import { Component, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appli-meteo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class AppliMeteoComponent {

  error: any = {};

  constructor(private renderer: Renderer2) {}
  
  onKeydown(event: any) {
    this.notCity=false;
    this.fetchMeteo(this.ville)
  }


  @Input() ville: string = "Bordeaux"
  onSubmit() {
    return this.ville;
  }
  @Input() showMeteo: boolean = false;

  notCity : boolean = false;
  temp: number = 0;
  fetchIcon: string = "";
  conditions: string = "";
  fetchHumidity: string = "";
  update: string ="";
  text: string="";

async fetchMeteo(ville: string) {

    try {
      
      const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c9b5f7d85e314a1fa37143350240104&q=${ville}&days=1&aqi=no&alerts=yes`)

//Création d'un message d'erreur si la requête n'aboutit pas
      if (!res.ok) {
        throw new Error("Could not find this city");
      }

      const data = await res.json();
      this.temp = data.current.temp_c.toFixed(0);
      this.conditions = data.current.condition.text;
      let update = data.current.last_updated.split(' ');
      this.update = update[1];
      this.fetchIcon = data.current.condition.icon;
      this.fetchHumidity = data.current.humidity;


//On attrappe le message d'erreur et on l'affiche
    } catch (error) {
     this.notCity = !this.notCity
     this.error = error
    }

 }

}
