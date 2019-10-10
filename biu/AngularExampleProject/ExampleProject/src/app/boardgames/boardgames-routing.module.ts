import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardgamesComponent} from "./components/boardgames/boardgames.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: BoardgamesComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardgamesRoutingModule {
}
