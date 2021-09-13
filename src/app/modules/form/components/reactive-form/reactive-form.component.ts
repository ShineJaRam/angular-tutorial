import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveFormGroup = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.maxLength(15)],
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log('폼데이터를 제출합니다', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  onValidation(type: string): boolean | undefined {
    return (
      this.reactiveFormGroup.get(type)?.invalid &&
      (this.reactiveFormGroup.get(type)?.dirty ||
        this.reactiveFormGroup.get(type)?.touched)
    );
  }
}
