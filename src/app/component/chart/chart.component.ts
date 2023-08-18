import { ChangeDetectionStrategy, Component } from '@angular/core';

enum ChartTypes {
  LINE = 1,
  BAR = 2,
  PIE = 3
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  selectedChartType = ChartTypes.LINE;
  chartTypes = ChartTypes;
}
