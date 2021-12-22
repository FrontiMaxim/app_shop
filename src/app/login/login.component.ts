import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [HttpService]
})

export class LoginComponent  {

    constructor(private httpService:HttpService, private router:Router) {}

    readonly url:string = 'http://localhost:3000/users';

    answer:object[] = [];

    login:string = '';
    password:string = '';

    isHiddenEmptyLogin:boolean = true;
    isHiddenEmptyPassword:boolean = true;
    isHiddenError:boolean = true;

    send():void {

        if (this.login == '') {
            this.isHiddenEmptyLogin = false;
        } else {
            this.isHiddenEmptyLogin = true;
        }

        if (this.password == '') {
            this.isHiddenEmptyPassword = false;
        } else {
            this.isHiddenEmptyPassword = true;
        }

        if (this.login != '' && this.password != '') {

            this.httpService.authorization(this.login, this.password, this.url).subscribe((data:any) => this.answer = data);
            
            // в массиве должен быть только один пользователь с заданным логином и паролем
            if (this.answer.length == 1) {

                const user:any = this.answer[0];
                const id:number = parseInt(user['id']);
                
                this.router.navigate([`/catalog`], { queryParams: {'id' : id} } );
            } else {
                this.isHiddenError = false;
            }
        }
    }
}