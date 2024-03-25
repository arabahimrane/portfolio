import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './admin.routing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StatisticsComponent } from './Views/statistics/statistics.component';
import { HeaderComponent } from './components/header/header.component';
import { ValueIndicateurComponent } from './components/value-indicateur/value-indicateur.component';
import { EditHomeComponent } from './Views/edit-home/edit-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenTableComponent } from './components/token-table/token-table.component';
import { GetDataService } from './service/get-data.service';



@NgModule({
  declarations: [
    AdminComponent,
    StatisticsComponent,
    HeaderComponent,
    ValueIndicateurComponent,
    EditHomeComponent,
    TokenTableComponent,
  ],
  providers: [GetDataService],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),

  ]
})
export class AdminModule { }
