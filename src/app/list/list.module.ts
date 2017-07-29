import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { DataService } from '../shared/data/data.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [DataService]
})
export class ListModule { }
