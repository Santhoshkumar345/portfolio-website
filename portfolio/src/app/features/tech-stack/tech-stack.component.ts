import { Component, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  readonly techStack = computed(() => this.portfolioService.portfolio()?.techStack ?? []);
  readonly duplicated = computed(() => [...this.techStack(), ...this.techStack()]);
  isPaused = false;

  constructor(private portfolioService: PortfolioService) {}

  pause(): void {
    this.isPaused = true;
  }

  resume(): void {
    this.isPaused = false;
  }
}
