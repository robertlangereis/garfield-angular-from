import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  phoneNumber = '';
  name = '';
  email = '';
  formService: FormService;


  constructor(formService: FormService) {
    this.formService = formService;
  }

  ngOnInit() {
  }


  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.formService.addGarfieldFan(submittedForm.value.name, submittedForm.value.phone, submittedForm.value.email);
  }

}
