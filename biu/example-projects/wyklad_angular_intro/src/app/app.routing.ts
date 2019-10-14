import { Routes } from '@angular/router';
import {TodoListTemplateFormViewComponent} from "./todo-list-template-form-view/todo-list-template-form-view.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoItemDetailsComponent} from "./todo-item-details/todo-item-details.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {ProtectedGuard} from "./guards/protected.guard";
import {ProtectedPageComponent} from "./protected-page/protected-page.component";


export const appRoutes: Routes = [
    {path: 'homepage', component: TodoListComponent},
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'template-form', component: TodoListTemplateFormViewComponent},
    {path: ':id/item', component: TodoItemDetailsComponent},
    {path: ':id/protected/item', component: TodoItemDetailsComponent, canActivate: [ProtectedGuard]},
    {path: 'protected/page', component: ProtectedPageComponent},
    {path: 'boardgames', loadChildren: () => import('./boardgames/boardgames.module').then(mod => mod.BoardgamesModule)},
    {path: '**', component: NotFoundPageComponent}
];
