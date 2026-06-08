import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private readonly portfolioService = inject(PortfolioService);
  private readonly themeService = inject(ThemeService);

  readonly isOpen = signal(false);
  readonly activeSection = signal('home');
  readonly portfolio = this.portfolioService.portfolio;
  readonly isDark = computed(() => this.themeService.theme() === 'dark');

  readonly navItems = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
    { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'fa-solid fa-code' },
    { id: 'tech-stack', label: 'Tech Stack', icon: 'fa-solid fa-layer-group' },
    { id: 'certifications', label: 'Certifications', icon: 'fa-solid fa-certificate' },
    { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'resume', label: 'Resume', icon: 'fa-solid fa-file-lines' },
    { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
  ];

  constructor() {}

  toggleSidebar(): void {
    this.isOpen.update((v) => !v);
  }

  closeSidebar(): void {
    this.isOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  scrollTo(sectionId: string): void {
    this.activeSection.set(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeSidebar();
  }

  downloadResume(): void {
    const data = this.portfolio();
    if (data?.resume?.url) {
      const link = document.createElement('a');
      link.href = data.resume.url;
      link.download = 'Santhosh_kumar_resume.pdf';
      link.click();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.navItems.map((n) => n.id);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection.set(sections[i]);
          break;
        }
      }
    }
  }
}
