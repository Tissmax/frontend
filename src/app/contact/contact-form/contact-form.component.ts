import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormModel } from '../contact-form-model';
import { JsonPipe } from '@angular/common';
 
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule, 
    JsonPipe
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  model = new ContactFormModel('', '', '');
  submitted = false;
  onSubmit() {this.submitted = true;}

}
