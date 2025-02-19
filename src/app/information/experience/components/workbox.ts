import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skilltag } from '../../projects/models/skilltag';
import { SkillpillNoDinamicComponent } from '../../projects/components/skillpillNoDinamic.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-workbox',
  standalone: true,
  imports: [CommonModule, SkillpillNoDinamicComponent],
  template: `
    <div class="p-4 border bg-neutral-50 dark:bg-gray-900 rounded-lg border-black/30"
      [ngClass]="{
        'ml-4': (position === 'right' || position === 'left') && isSmallScreen,
        'sm:ml-7': position === 'right' && !isSmallScreen,
        'sm:mr-7': position === 'left' && !isSmallScreen,
      }"
    >
      <h3 class="text-lg sm:text-xl font-bold dark:text-purple-400 text-purple-500">
        {{ workstation }}
      </h3>
      <h4 class="font-semibold text-2xs sm:text-[18px] text-gray-600 dark:text-white">
        {{ company }}
      </h4>
      <time class="block text-[14px] text-gray-500 dark:text-gray-400">
        {{ date }}
      </time>
      <ol class="mt-2 text-md mb-5 text-gray-700 dark:text-gray-300 list-disc pl-3" [innerHTML]="description"> </ol>

      <nav class="flex flex-wrap gap-2 mt-auto">
        @for(skill of tags; track $index) {
          <app-skillpillnodinamic [skill]="skill"></app-skillpillnodinamic>
        }
      </nav>
    </div>
  `,
})
export class workboxComponent {
  @Input() workstation: string = '';
  @Input() company: string = '';
  @Input() date: string = '';
  @Input() description: string = '';
  @Input() tags: Skilltag[] = [];
  @Input() position!: 'left' | 'right';
  @Input() getSafeHtml!: (html: string) => SafeHtml

  // Variable para detectar si la pantalla es pequeña
  isSmallScreen: boolean = window.innerWidth < 640;

  constructor() {
    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 640;
    });
  }
}
