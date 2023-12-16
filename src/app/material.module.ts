import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"

@NgModule({
    imports: [MatButtonModule],
    exports: [MatButtonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})
export class MaterialModule {}