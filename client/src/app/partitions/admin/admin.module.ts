import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './admin.routing';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StatisticsComponent } from './Views/statistics/statistics.component';
import { HeaderComponent } from './components/header/header.component';
import { ValueIndicateurComponent } from './components/value-indicateur/value-indicateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenTableComponent } from './components/token-table/token-table.component';
import { GetDataService } from './service/get-data.service';
import { LogoutComponent } from './components/logout/logout.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { CardCertificateComponent } from './components/card-certificate/card-certificate.component';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';



@NgModule({
  declarations: [
    AdminComponent,
    StatisticsComponent,
    HeaderComponent,
    ValueIndicateurComponent,
    TokenTableComponent,
    LogoutComponent,
    CertificatesComponent,
    CardCertificateComponent,
    OptionMenuComponent,
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
