import { Component, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = computed(() => this.portfolioService.portfolio()?.experience ?? []);

  constructor(private portfolioService: PortfolioService) {}
}
