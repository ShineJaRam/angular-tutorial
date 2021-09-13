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
      name: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(15)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.maxLength(15)],
    });
  }

  ngOnInit(): void {
    /*
    개별 데이터를 추출하는 방법에 대한 참고용 코드입니다.

    this.reactiveFormGroup.controls['name'].valueChanges.subscribe(value => {
      console.log('name: ', value);
    });
    this.reactiveFormGroup.controls['email'].valueChanges.subscribe(value =>
      console.log('email: ', value)
    );
    this.reactiveFormGroup.controls['message'].valueChanges.subscribe(value =>
      console.log('message: ', value)
    );
    */
    this.reactiveFormGroup.valueChanges.subscribe(value => console.log(value));
  }

  onSubmit(form: FormGroup) {
    console.log({
      '폼데이터를 제출합니다': form.valid,
      Name: form.value.name,
      Email: form.value.email,
      Message: form.value.message,
    });
  }

  onValidation(type: string): boolean | undefined {
    return (
      this.reactiveFormGroup.get(type)?.invalid &&
      (this.reactiveFormGroup.get(type)?.dirty ||
        this.reactiveFormGroup.get(type)?.touched)
    );
  }
}
