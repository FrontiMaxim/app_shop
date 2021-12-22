import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CatalogGuard implements CanActivate {
    constructor() { }

    // пропуск по ссылке, если у пользователя есть id в бд
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

        return route.queryParams['id'] != undefined ? true : false;
    }
}