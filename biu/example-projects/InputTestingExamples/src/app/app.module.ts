import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushComponent } from './components/Standardowe/push/push.component';
import { SetNewArrayComponent } from './components/Set/set-new-array/set-new-array.component';
import { SetReferenceComponent } from './components/Set/set-reference/set-reference.component';
import { EvenPipe } from './pipes/even.pipe';
import { PipeComponent } from './components/Pipe/pipe/pipe.component';
import { PipeDisplayComponent } from './components/Pipe/pipe-display/pipe-display.component';
import { SetDisplayComponent } from './components/Set/set-display/set-display.component';
import { StandardoweDisplayComponent } from './components/Standardowe/standardowe-display/standardowe-display.component';

@NgModule({
    declarations: [
        AppComponent,
        PushComponent,
        SetNewArrayComponent,
        SetReferenceComponent,
        EvenPipe,
        PipeComponent,
        PipeDisplayComponent,
        SetDisplayComponent,
        StandardoweDisplayComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
