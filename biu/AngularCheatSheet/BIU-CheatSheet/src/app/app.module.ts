import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListViewComponent } from './todo-list-view/todo-list-view.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent,
    TodoListComponent,
    TodoListViewComponent,
    TodoListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
