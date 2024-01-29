import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { AboutComponent } from './component/about/about.component';
import { CserviceComponent } from './component/cservice/cservice.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { FooterComponent } from './component/footer/footer.component';
import { SkillComponent } from './component/skill/skill.component';
import { CertificateComponent } from './component/certificate/certificate.component';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PresentationComponent,
    CserviceComponent,
    AboutComponent,
    FooterComponent,
    SkillComponent,
    CertificateComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
