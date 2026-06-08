import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly dataUrl = 'data/portfolio.json';
  readonly portfolio = signal<Portfolio | null>(null);

  constructor(private http: HttpClient) {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<Portfolio>(this.dataUrl).subscribe({
      next: (data) => this.portfolio.set(data),
      error: (err) => console.error('Failed to load portfolio data', err),
    });
  }
}
