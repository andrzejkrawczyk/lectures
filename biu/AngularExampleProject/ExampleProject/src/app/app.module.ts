import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListViewComponent} from './todo-list-view/todo-list-view.component';
import {TodoListFormComponent} from './todo-list-form/todo-list-form.component';
import {TodoListTemplateFormViewComponent} from './todo-list-template-form-view/todo-list-template-form-view.component';
import {TodoListTemplateFormComponent} from './todo-list-template-form/todo-list-template-form.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routing";
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoListItemComponent,
        TodoListComponent,
        TodoListViewComponent,
        TodoListFormComponent,
        TodoListTemplateFormViewComponent,
        TodoListTemplateFormComponent,
        TodoItemDetailsComponent,
        NotFoundPageComponent,
        HomePageComponent,
        ProtectedPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
