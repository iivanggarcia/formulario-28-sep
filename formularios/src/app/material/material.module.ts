import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports:[
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
