import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { InputSetComponent } from './input-set/input-set.component';
import { InputSetZmianaTablicyComponent } from './input-set-zmiana-tablicy/input-set-zmiana-tablicy.component';

@NgModule({
    declarations: [AppComponent, InputComponent, InputSetComponent, InputSetZmianaTablicyComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
