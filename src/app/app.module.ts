import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormService } from "./form.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
