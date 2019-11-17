import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentScreen = 1;
    changeScreen(i: number) {
        this.currentScreen = i;
    }

    // bez Set
    push() {}

    newArray() {}

    // z set
    setPush() {}

    setPushChildNewArray() {}

    setNewArrayRoot() {}

    setNewArrayRootAndChild() {}

    // pipes
    pipePush() {}

    pipeNewAray() {}
}
