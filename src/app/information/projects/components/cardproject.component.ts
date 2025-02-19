import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skilltag } from '../models/skilltag';
import { CardProject } from '../models/cardproject';
import { SkillpillNoDinamicComponent } from './skillpillNoDinamic.component';
import { IconGithubComponent } from '../../home/icons/github';
import { ViewIconComponent } from '../icons/view.icon';

@Component({
  selector: 'app-cardproject',
  standalone: true,
  imports: [CommonModule, SkillpillNoDinamicComponent,IconGithubComponent,ViewIconComponent],
  template: `
    <div
  class="rounded-lg bg-neutral-100 dark:bg-gray-900  border border-black/30 h-full flex flex-col"
>
  <img [src]="project.img" alt="project img" class="w-full rounded-t-lg h-auto p-0 m-0" >

  <div class="p-4 flex flex-col flex-grow">

    <h3 class="font-semibold text-2xl text-black dark:text-white mb-3">{{ project.title }}</h3>

    <nav class="flex items-end justify-start gap-x-4 mb-3 ">
      <a [href]="project.gitlink" class="inline-flex bg-gray-100 text-gray-800 border-gray-400
      items-center justify-center gap-2 px-3 py-1 space-x-2 text-base
      transition dark:text-white dark:bg-gray-800 border dark:border-gray-600
       focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800
        hover:border-gray-900 group max-w-fit rounded-xl hover:text-white
        focus:outline-none focus-visible:outline-none focus-visible:ring
         focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black dark:hover:bg-gray-600">
         <app-icon-github size=22></app-icon-github>
         Github
      </a>


      <a [href]="project.pagelink" class="inline-flex bg-gray-100 text-gray-800 border-gray-400
      items-center justify-center gap-2 px-3 py-1 space-x-2 text-base
      transition dark:text-white dark:bg-gray-800 border dark:border-gray-600
       focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800
        hover:border-gray-900 group max-w-fit rounded-xl hover:text-white
        focus:outline-none focus-visible:outline-none focus-visible:ring
         focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black dark:hover:bg-gray-600">
         <app-icon-view size=22></app-icon-view>
         Ver
      </a>

    </nav>

    <p class="mb-3 text-gray-800 dark:text-gray-300">{{ project.desc }}</p>



    <nav class="flex flex-wrap gap-2 mb-2 mt-auto border-t pt-2 border-gray-500 dark:border-gray-700"> <!-- mt-auto para alinear al final -->
      @for(skill of project.tags; track $index) {
        <app-skillpillnodinamic [skill]="skill"></app-skillpillnodinamic>
      }
    </nav>




  </div>
</div>
  `,
})
export class CardprojectComponent {
  @Input() project!: CardProject;


}
