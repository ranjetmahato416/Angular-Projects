import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  template: `<div *ngIf="displayName; then displayBlock; else elseBlock"></div>
  <ng-template #displayBlock>
    <h2 class="text-2xl font-bold translate-x-8">Report</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2 class="text-3xl font-bold translate-x-28">Report is hidden.</h2>
  </ng-template>`,
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  displayName = false;

}
