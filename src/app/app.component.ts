import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { HomeComponent } from './information/home/home.component';
import { ExperienceComponent } from "./information/experience/experience.component";
import { ProjectsComponent } from './information/projects/projects.component';
import { AboutMeComponent } from './information/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent, HomeComponent, ExperienceComponent,ProjectsComponent,AboutMeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'porfolioweb-dev';
}
