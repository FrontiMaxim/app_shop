import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private http:HttpClient) { }

    // метод для авторизации (при удачной авторизации возвращается id пользователя)
    authorization(login:string, password:string):Observable<any> {

        const params = new HttpParams().set('login', login).set('password', password);

        return this.http.get('url', {params});
    }
}