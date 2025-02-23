import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { RouterModule } from '@angular/router';
import { WEBSITE_ROUTES } from './website.routing';
import { AboutComponent } from './components/about/about.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CserviceComponent } from './components/cservice/cservice.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillComponent } from './components/skill/skill.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './Views/home/home.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';



@NgModule({
  declarations: [
    WebsiteComponent,
    HeaderComponent,
    PresentationComponent,
    CserviceComponent,
    AboutComponent,
    FooterComponent,
    SkillComponent,
    CertificateComponent,
    LoginFormComponent,
    HomeComponent,
    ProjetListComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(WEBSITE_ROUTES),
    CommonModule,

  ]
})
export class WebsiteModule { }
