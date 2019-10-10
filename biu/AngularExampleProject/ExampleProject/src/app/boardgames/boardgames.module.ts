import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardgamesRoutingModule } from './boardgames-routing.module';
import { BoardgamesComponent } from './components/boardgames/boardgames.component';


@NgModule({
  declarations: [BoardgamesComponent],
  imports: [
    CommonModule,
    BoardgamesRoutingModule
  ]
})
export class BoardgamesModule { }
