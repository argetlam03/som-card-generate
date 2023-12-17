import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { PlayerSearchComponent } from "./player-search/player-search.component";

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'player-search', component: PlayerSearchComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}