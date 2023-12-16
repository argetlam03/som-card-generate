import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule, FormsModule, HttpClientModule, MaterialModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}