import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PushComponent } from './input/controllers/Standardowe/push/push.component';

@NgModule({
    declarations: [AppComponent, InputComponent, PushComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
