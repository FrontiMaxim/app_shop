import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [HttpService]
})

export class LoginComponent  {

    constructor(private httpService:HttpService, private router:Router) {}

    login:string = '';
    password:string = '';
   
    send() {

        let id = -1;
        this.httpService.authorization(this.login, this.password).subscribe((data:any) => id = parseInt(data));

        if (this.login != '') {
            if (this.password != '') {
                
                this.router.navigate([`/catalog`],
                {
                    queryParams: {
                        'id' : id
                    }
                });
            }
        }
    }
}