import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatTableModule } from "@angular/material/table"
import { MatIconModule } from "@angular/material/icon"

const components = [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatTableModule,
    MatIconModule
]

@NgModule({
    imports: components,
    exports: components,
    providers: []
})
export class MaterialModule {}