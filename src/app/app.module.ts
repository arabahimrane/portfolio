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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
