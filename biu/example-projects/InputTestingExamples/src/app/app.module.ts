import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushComponent } from './input/controllers/Standardowe/push/push.component';
import { NewArrayComponent } from './input/controllers/Standardowe/new-array/new-array.component';
import { SetPushComponent } from './input/controllers/set/set-push/set-push.component';
import { SetPushChildNewArrayComponent } from './input/controllers/set/set-push-child-new-array/set-push-child-new-array.component';
import { SetNewArrayRootComponent } from './input/controllers/Set/set-new-array-root/set-new-array-root.component';
// tslint:disable-next-line: max-line-length
import { SetNewArrayRootAndChildComponent } from './input/controllers/Set/set-new-array-root-and-child/set-new-array-root-and-child.component';
import { EvenPipe } from './input/pipes/even.pipe';
import { PipeComponent } from './input/controllers/Pipe/pipe/pipe.component';

@NgModule({
    declarations: [
        AppComponent,
        PushComponent,
        NewArrayComponent,
        SetPushComponent,
        SetPushChildNewArrayComponent,
        SetNewArrayRootComponent,
        SetNewArrayRootAndChildComponent,
        EvenPipe,
        PipeComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
