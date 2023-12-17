import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { PlayerSearchComponent } from "./player-search/player-search.component";
import { MainComponent } from "./main/main.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, MainComponent, PlayerSearchComponent],
    imports: [
        BrowserModule, 
        RouterModule, 
        FormsModule, 
        HttpClientModule, 
        MaterialModule, 
        RouterOutlet, 
        RouterLink, 
        RouterLinkActive, 
        AppRoutingModule, 
        NoopAnimationsModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}