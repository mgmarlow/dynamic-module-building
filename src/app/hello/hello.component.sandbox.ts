import { sandboxOf } from "../sandbox-builder";
import { ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from "./hello.component";

export default sandboxOf(HelloComponent, {
    imports: [ReactiveFormsModule]
}).add('Default', {
    template: `
        <div>
            <p>other test</p>
            <app-hello></app-hello>
        </div>
    `
});
