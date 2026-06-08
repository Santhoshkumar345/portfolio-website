import { Component } from '@angular/core';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeroComponent } from './features/hero/hero.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TechStackComponent } from './features/tech-stack/tech-stack.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { EducationComponent } from './features/education/education.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    TechStackComponent,
    CertificationsComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
