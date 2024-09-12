import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
// Form model is defined which will be exported in JSON
myform: FormGroup = new FormGroup({
  name: new FormControl("Rohit", Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  comment: new FormControl('', Validators.required)
});

showData() {
  console.log("Name=" + this.myform.controls['name'].value);
  console.log("Email=" + this.myform.controls['email'].value);
  console.log("Comment=" + this.myform.controls['comment'].value);
}

// Getter methods for validations
get name() {
  return this.myform.get('name');
}

get email() {
  return this.myform.get('email');
}

get comment() {
  return this.myform.get('comment');
}
}  