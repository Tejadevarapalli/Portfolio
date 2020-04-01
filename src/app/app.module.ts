import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { AcademicComponent } from './academic/academic.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SummaryComponent,
    ExperienceComponent,
    AcademicComponent,
    ProjectsComponent,
    TechnologiesComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
