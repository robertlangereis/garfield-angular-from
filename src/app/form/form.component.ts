import { Component, OnInit } from "@angular/core";
import { FormService } from "../form.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  phoneNumber = "";
  name = "";
  email = "";
  formService: FormService;
  nameChecked = false;
  emailChecked = false;
  phoneChecked = false;
  formValid = false

  constructor(formService: FormService) {
    this.formService = formService;
  }

  ngOnInit() {
    console.log(this.emailChecked);
    console.log(this.phoneChecked);
  }

  checkboxCheck(input) {
    console.log(input.checked, "event");
    if (input.name === "name") this.nameChecked = input.checked;
    if (input.name === "email") this.emailChecked = input.checked;
    if (input.name === "phone") this.phoneChecked = input.checked;
  }


  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.formService.addGarfieldFan(
      submittedForm.value.name,
      submittedForm.value.phone,
      submittedForm.value.email
    );
  }
}
