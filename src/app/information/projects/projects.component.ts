import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { projectsIconComponent } from './icons/projectsicon';
import { SkillpillComponent } from './components/skilpill.component';
import { Skilltag } from './models/skilltag';
import { skilltagsData } from './data/skilltag.data';
import { CommonModule } from '@angular/common';
import { CardProject } from './models/cardproject';
import { cardProjectsData } from './data/projectsdata';

import { SkillpillNoDinamicComponent } from './components/skillpillNoDinamic.component';
import { CardprojectComponent } from './components/cardproject.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [projectsIconComponent, SkillpillComponent, CommonModule, CardprojectComponent ], // Asegúrate de que CommonModule esté aquí
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
  iconSize: string = '32';
  skills: Skilltag[] = skilltagsData;
  filterSkills: Skilltag[]=[];
  projects:CardProject[]=cardProjectsData;

  get filteredProjects(): CardProject[] {
    if (this.filterSkills.length === 0) {
      // Si no hay filtros, mostrar todos los proyectos
      return this.projects;
    } else {
      // Filtrar proyectos que contengan al menos uno de los tags seleccionados
      return this.projects.filter((project) =>
        this.filterSkills.some((skill) =>
          project.tags.some((tag) => tag.name === skill.name)
        )
      );
    }
  }

  toggleFilter(skill: Skilltag) {
    const index = this.filterSkills.findIndex(s => s.name === skill.name);
    if (index === -1) {
      this.filterSkills.push(skill);;
    } else {
      this.filterSkills.splice(index, 1);
    }
  }

  isSkillSelected(skill: Skilltag): boolean {
    return this.filterSkills.some(s => s.name === skill.name);
  }

}
