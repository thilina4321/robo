import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio'
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
