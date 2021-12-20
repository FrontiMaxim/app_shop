import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

import { CatalogModule } from './catalog/catalog.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogGuard } from './catalog/catalog.guard';

const appRouters:Routes = [
    {path: '', component: LoginComponent},
    {path: 'catalog', component: CatalogComponent, canActivate: [CatalogGuard]}
];

@NgModule({
    imports: [BrowserModule, 
              HttpClientModule,
              RouterModule.forRoot(appRouters),
              LoginModule,
              CatalogModule
             ],
    declarations:  [AppComponent],
    bootstrap: [AppComponent],
    providers: [CatalogGuard]
})
export class AppModule { }
