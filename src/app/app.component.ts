import { Component, HostListener, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

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
  title = 'frontend';

  constructor() { }

  percentOfScreenHeightScrolled: string = "";
  scroll: boolean = false;

  setScrollVar() {
    setTimeout(()=>{
      const htmlElement = document.documentElement
      let a = htmlElement.scrollTop / htmlElement.clientHeight * 100;
      this.percentOfScreenHeightScrolled = a.toString();
      htmlElement.style.setProperty("--scroll", this.percentOfScreenHeightScrolled)
      console.log(this.percentOfScreenHeightScrolled);
      if (a = 0) {
        this.scroll = false;
      }
      if (a > 0 && a < 100) {
        this.scroll = !this.scroll;
      }
      if (a > 100 && a < 200) {
        this.scroll = !this.scroll;
      }
      if (a >= 200) {
        this.scroll = !this.scroll;
      }
    }, 10)   
  };

  ngAfterViewInit(){
    this.setScrollVar()
  }

}
