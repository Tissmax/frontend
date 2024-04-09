import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hoverInfo: boolean = false;
  hoverGithub: boolean = false;
  hoverLinkedin: boolean = false;
}
