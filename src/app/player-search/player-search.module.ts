import { NgModule } from "@angular/core";
import { PlayerSearchComponent } from "./player-search.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [PlayerSearchComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    providers: []
})
export class PlayerSearchModule {}