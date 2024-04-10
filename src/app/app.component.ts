import { Component, HostListener, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            AboutComponent,
            ContactComponent,
            HomeComponent,
            ProjectComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mathis B.';

  isAboutInViewport: boolean = false;
  isContactInViewport: boolean = false;
  isProjetInViewport: boolean = false;
  
  homeHover:boolean = false;
  contactHover:boolean = false;
  aboutHover:boolean = false;
  projectHover:boolean = false;


  constructor(
              private titleService: Title,
    ) { 
      this.titleService.setTitle("Mathis B.")
     }

  ngAfterViewInit(){}

  animationTrigger() {
    if (this.isAboutInViewport) {
      document.documentElement.style.setProperty('--about-animation-trigger', 'running');
    }
    if (this.isAboutInViewport) {
      document.documentElement.style.setProperty('--projet-animation-trigger', 'running');
    }
    if (this.isAboutInViewport) {
      document.documentElement.style.setProperty('--contact-animation-trigger', 'running');
    }
  }

}
