import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushComponent } from './components/Standardowe/push/push.component';
import { SetNewArrayComponent } from './components/Set/set-new-array/set-new-array.component';
import { SetReferenceComponent } from './components/Set/set-reference/set-reference.component';
import { EvenPipe } from './pipes/even.pipe';
import { PipeComponent } from './components/Pipe/pipe/pipe.component';

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
