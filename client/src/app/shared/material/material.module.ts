import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgChartsAngular } from 'ag-charts-angular';





const ChartLibrery = [AgChartsAngular];
const Material = [ReactiveFormsModule,FlexLayoutModule, MatToolbarModule, MatMenuModule, MatSidenavModule,
  MatListModule, MatButtonModule, MatCardModule, NgOptimizedImage, MatInputModule,
  MatTableModule, MatFormFieldModule, MatIconModule, FormsModule]



@NgModule({
  declarations: [],
  imports: [ChartLibrery, Material],
  exports: [ChartLibrery, Material]
})
export class MaterialModule { }
