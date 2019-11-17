import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushComponent } from './input/controllers/Standardowe/push/push.component';
import { SetNewArrayComponent } from './input/controllers/Set/set-new-array/set-new-array.component';
import { SetReferenceComponent } from './input/controllers/Set/set-reference/set-reference.component';
import { EvenPipe } from './input/pipes/even.pipe';
import { PipeComponent } from './input/controllers/Pipe/pipe/pipe.component';

@NgModule({
    declarations: [
        AppComponent,
        PushComponent,
        SetNewArrayComponent,
        SetReferenceComponent,
        EvenPipe,
        PipeComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
