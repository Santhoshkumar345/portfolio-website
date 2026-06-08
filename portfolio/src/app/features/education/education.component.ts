import { Component, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly education = computed(() => this.portfolioService.portfolio()?.education ?? []);

  constructor(private portfolioService: PortfolioService) {}
}
