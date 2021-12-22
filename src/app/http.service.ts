import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private http:HttpClient) { }

    // метод для авторизации (при удачной авторизации возвращается объект пользователя, у которого извлекается id)
    authorization(login:string, password:string, url:string):Observable<any> {

        const params = new HttpParams().set('login', login).set('password', password);
        console.log(params);

        return this.http.get<Observable<any>>(url, {params});
    }
}