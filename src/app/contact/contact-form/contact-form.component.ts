import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactFormModel } from '../contact-form-model';
import { get } from 'http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

contactForm!: FormGroup;
newMail: {} = {}
ngOnInit(): void {
  this.contactForm = new FormGroup({
    prenom: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    nom: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    mail: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl(''),
  })
}
get prenom() {
  return this.contactForm.get('prenom')
}
get nom() {
  return this.contactForm.get('nom')
}
get mail() {
  return this.contactForm.get('mail')
}
get message() {
  return this.contactForm.get('message')
}

  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.contactForm.reset();
    this.newMail = {
      prenom: this.prenom?.get('value'),
      nom: this.nom,
      mail: this.mail,
      message: this.message
    }
    console.log(this.newMail);
    
  }
}

