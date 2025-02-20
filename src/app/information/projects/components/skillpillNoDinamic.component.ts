import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skilltag } from '../models/skilltag';

@Component({
  selector: 'app-skillpillnodinamic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex items-center gap-1 px-2 py-[3px] rounded-full text-[11px]
      font-medium border border-black/10 text-black"
      [ngClass]="skillClasses"
    >
      <ng-container *ngIf="skill.icon">
        <ng-container *ngComponentOutlet="skill.icon"></ng-container>
      </ng-container>
      {{ skill.name }}
    </div>
  `,
})
export class SkillpillNoDinamicComponent {
  @Input() skill!: Skilltag;


  get skillClasses() {
    return `${this.skill.colorP}` ;
  }

}
