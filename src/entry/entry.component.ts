import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    template: `<div>
                    <div class="form-group">
                        <label>Введите логин:</label>
                        <input [(ngModel)]="login" placeholder="login" type="text">
                    </div>
                    <div class="form-group">
                        <label>Введите пароль:</label>
                        <input [(ngModel)]="password" placeholder="password" type="password" />
                    </div>
                    <div class="form-group">
                        <button class="btn">Войти</button>
                    </div>
               </div>`
})
export class EntryComponent {
    login: string;
    password: string;

    constructor() {
        this.login = '';
        this.password = '';
    }
}