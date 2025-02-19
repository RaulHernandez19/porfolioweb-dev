import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-socialpill',
  standalone: true,
  template: `
    <a
      [href]="href"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full border flex justify-center items-center
      gap-x-2 py-1 px-3 md:py-2 lg:px-4 lg:py-1 text-xs lg:text-base
       bg-stone-100 border-black/50 text-gray-800 border-gray-400
       hover:scale-105 hover:bg-purple-400 hover:border-black/60
       dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-black
        dark:hover:bg-purple-500 transition"
    >
      <ng-content></ng-content>

    </a>
  `,
})
export class IconSocialpillComponent {
    @Input() href: string = '#'
}
