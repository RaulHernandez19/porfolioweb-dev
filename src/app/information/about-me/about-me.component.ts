import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userIconComponent } from '../projects/icons/user.icon';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule,userIconComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
