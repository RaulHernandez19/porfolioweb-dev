import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skilltag } from '../models/skilltag';

@Component({
  selector: 'app-skillpill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex items-center gap-1 px-2 py-1 rounded-full text-[11px] transition-colors duration-200 cursor-pointer"
      [ngClass]="skillClasses"
      (click)="toggleSkill()"
    >
      <ng-container *ngIf="skill.icon">
        <ng-container *ngComponentOutlet="skill.icon"></ng-container>
      </ng-container>
      {{ skill.name }}
    </div>
  `,
})
export class SkillpillComponent {
  @Input() skill!: Skilltag;
  @Input() selected: boolean = false;
  @Output() skillToggled = new EventEmitter<Skilltag>();

  get skillClasses() {
    return this.selected ? `${this.skill.colorP} text-black hover:text-black` : ` bg-black text-white ${this.skill.colorS} hover:text-black dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-300/50 dark:hover:border-black` ;
  }

  toggleSkill() {
    this.selected = !this.selected;
    this.skillToggled.emit(this.skill);

  }
}
