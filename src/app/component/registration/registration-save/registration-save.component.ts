import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registration-save',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration-save.component.html',
  styleUrl: './registration-save.component.scss'
})
export class RegistrationSaveComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      division: ['', [Validators.required, Validators.maxLength(100)]],
      building: ['', [Validators.required, Validators.maxLength(100)]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      room: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Replace with API call or state update as needed
    console.log('Registration payload:', this.form.value);
    alert('Registration submitted!');
    this.form.reset();
  }
}
