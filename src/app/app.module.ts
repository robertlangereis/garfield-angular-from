import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormService } from "./form.service";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
