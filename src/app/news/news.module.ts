import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { NewsComponent } from './news.component';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
    
  ]
})
export class NewsModule { }
