import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FontAwesomeModule,
    MatToolbarModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    FontAwesomeModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
