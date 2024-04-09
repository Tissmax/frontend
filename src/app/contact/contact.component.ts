import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactFormModel } from './contact-form-model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  phoneIsShown:boolean=false
  mailIsShown:boolean=false

  model = new ContactFormModel('', '', '');
  submitted = false;
  onSubmit() {this.submitted = true;}

}
