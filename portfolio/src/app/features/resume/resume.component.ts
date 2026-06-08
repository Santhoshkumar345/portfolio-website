import { Component, computed } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  readonly resumeUrl = computed(() => this.portfolioService.portfolio()?.resume?.url ?? '');
  readonly safeUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.resumeUrl();
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  constructor(
    private portfolioService: PortfolioService,
    private sanitizer: DomSanitizer
  ) {}

  download(): void {
    const url = this.resumeUrl();
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Santhosh_kumar_resume.pdf';
      link.click();
    }
  }
}
