import { Component } from '@angular/core';
import { timecircleComponent } from './components/time_circle';
import { workboxComponent } from './components/workbox';
import { IconWorkComponent } from './icons/work';
import { skilltagsData } from '../projects/data/skilltag.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  imports: [timecircleComponent, workboxComponent,IconWorkComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  jobs=[
    {
      workstation: "Backend Developer/Data Analyst",
      company: "Skyworks inc.",
      date:"02/2024 - 01/2025",
      description:"<li>Automaticé el análisis de archivos para la detección de errores, usando <strong>golang</strong> en Python para extraer datos de Jira, creando <strong>Apis</strong> con JS y MongoDB como base de datos. </li><br><li>Transcribí código de R a Python para su uso en Dagster y refactorice Apis aplicándole documentación <strong>Swagger</strong>.</li><br><li>Analice y creé reportes en Power BI basados en bases de datos, apoyándome también de <strong>Pandas</strong>.</li>",
      position:"left",
      tags:[
        skilltagsData.find(tag => tag.name === 'Python')!,
        skilltagsData.find(tag => tag.name === 'JavaScript')!,
        skilltagsData.find(tag => tag.name === 'Power BI')!,
        skilltagsData.find(tag => tag.name === 'Node.js')!,
        skilltagsData.find(tag => tag.name === 'Mongo DB')!,
        skilltagsData.find(tag => tag.name === 'Jira')!
      ]
    },
    {
      workstation: "Próximamente...",
      company: "",
      date:"",
      description:"",
      position:"right",
      tags:[
      ]
    }
  ]

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
