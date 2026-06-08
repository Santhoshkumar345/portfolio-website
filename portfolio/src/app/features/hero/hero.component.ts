import { Component, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly data = computed(() => this.portfolioService.portfolio());

  constructor(private portfolioService: PortfolioService) {}

  scrollToExperience(): void {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume(): void {
    const portfolio = this.data();
    if (portfolio?.resume?.url) {
      const link = document.createElement('a');
      link.href = portfolio.resume.url;
      link.download = 'Santhosh_kumar_resume.pdf';
      link.click();
    }
  }
}
