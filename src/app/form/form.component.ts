import { Component, OnInit, Injectable } from "@angular/core";
import { FormService } from "../form.service";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
@Injectable()
export class FormComponent implements OnInit {
  phoneNumber = "";
  name = "";
  email = "";
  formService: FormService;
  nameChecked = false;
  emailChecked = false;
  phoneChecked = false;
  formValid = false;
  http: HttpClient;

  constructor(formService: FormService, http: HttpClient) {
    this.formService = formService;
    this.http = http;
  }

  ngOnInit() {}

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
    console.log(submittedForm, "submittedForm");
    this.formService.addGarfieldFan(
      submittedForm.value.name,
      submittedForm.value.phone,
      submittedForm.value.email
    );
    const { name, email, phone } = submittedForm.value;
    this.http
      .get(
        `${environment.formUrl}?name=${encodeURIComponent(
          name
        )}&email=${encodeURIComponent(email)}&phone_nr=${encodeURIComponent(
          phone
        )}`
      )
      .subscribe((response: Response) => {
        console.log(response);
      });
  }
}
