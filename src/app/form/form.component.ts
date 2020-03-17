import { Component, OnInit, Injectable } from "@angular/core";
import { FormService } from "../form.service";
import { HttpClient } from "@angular/common/http";
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";

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

  constructor(
    formService: FormService,
    http: HttpClient,
    public db: AngularFireDatabase
  ) {
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
    // console.log(submittedForm, "submittedForm");
    // this.formService.addGarfieldFan(
    //   submittedForm.value.name,
    //   submittedForm.value.phone,
    //   submittedForm.value.email
    // );
    const { name, email, phone } = submittedForm.value;
    console.log("phone", phone);
    console.log("email", email);
    console.log("name", name);
    let newSubscriber = { name, email, phone };

    this.db.list("/subscribers").push(newSubscriber);
    console.log("succes, new subscriber", newSubscriber);
    // this.form.reset();

    // this.http
    //   .get(
    //     `${environment.formUrl}?name=${encodeURIComponent(
    //       name
    //     )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
    //       phone
    //     )}`
    //   )
    //   .subscribe((response: Response) => {
    //     console.log("response", response);
    //   });
  }
}
