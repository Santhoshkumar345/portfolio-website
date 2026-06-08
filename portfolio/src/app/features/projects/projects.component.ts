import { Component, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = computed(() => this.portfolioService.portfolio()?.projects ?? []);

  constructor(private portfolioService: PortfolioService) {}
}
