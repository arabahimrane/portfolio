import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent {
  myForm: FormGroup ;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      principalTitle: ['', Validators.required],
      description: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.myForm.valid) {
      // Here you can access the form data
      const formData = this.myForm.value;
      console.log(formData);
      // Now you can send this formData to your backend or do any other processing.
    }
  }
}