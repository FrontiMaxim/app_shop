import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntryComponent } from './entry.component';
import { FormsModule }   from '@angular/forms';
 
@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ EntryComponent],
    bootstrap:    [ EntryComponent ]
})
export class EntryModule { }