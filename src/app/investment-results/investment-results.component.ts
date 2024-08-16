import { Component, computed, inject} from '@angular/core';

import { CommonModule } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private InvestmentService = inject(InvestmentService);

  results = computed(() => this.InvestmentService.resultData());
}
