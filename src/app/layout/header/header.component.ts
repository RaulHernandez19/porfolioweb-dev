import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  activeSection = '';
  isDarkMode = false;

  sections = [
    { id: 'contact', name: 'Contacto' },
    { id: 'experience', name: 'Experiencia' },
    { id: 'projects', name: 'Projectos' },
    { id: 'about', name: 'Sobre mí'}
  ];

  ngOnInit(): void {
    // Cargar la preferencia del usuario desde localStorage
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.updateTheme();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50; // Si baja más de 50px, se activa el fondo

    // Detectar la sección activa
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
          this.activeSection = section.id;
        }
      }
    }
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
