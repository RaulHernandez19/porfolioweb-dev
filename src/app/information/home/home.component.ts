import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconCorreoComponent } from './icons/correo';
import { IconSocialpillComponent } from './icons/socialpill';
import { IconCvComponent } from './icons/cv';
import { IconLinkedinComponent } from './icons/linkedin';
import { IconGithubComponent } from './icons/github';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [IconSocialpillComponent,IconLinkedinComponent,
    IconCorreoComponent,IconCvComponent,IconGithubComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeComponent {

}
