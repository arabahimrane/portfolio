import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgChartsAngular } from 'ag-charts-angular';

const ChartLibrery = [AgChartsAngular, NgxDropzoneModule];
const Material = [ReactiveFormsModule, FlexLayoutModule, MatToolbarModule, MatMenuModule, MatSidenavModule,
  MatListModule, MatButtonModule, MatCardModule, NgOptimizedImage, MatInputModule, MatProgressSpinnerModule,
  MatTableModule, MatFormFieldModule, MatIconModule, FormsModule, MatDialogModule, MatPaginatorModule]
@NgModule({
  declarations: [],
  imports: [ChartLibrery, Material],
  exports: [ChartLibrery, Material],
})
export class MaterialModule { }
