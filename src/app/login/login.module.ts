import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [FormsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent]
})
export class LoginModule { }
