import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PushComponent } from './input/controllers/Standardowe/push/push.component';
import { NewArrayComponent } from './input/controllers/Standardowe/new-array/new-array.component';

@NgModule({
    declarations: [AppComponent, InputComponent, PushComponent, NewArrayComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
