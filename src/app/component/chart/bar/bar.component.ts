import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartHelper } from '../common/chart-helper';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent extends ChartHelper {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public barChartLegend = true;
  public barChartPlugins = [];

  public override data = {
    labels: ['Label', 'Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public override pushOne(): void {
    super.pushOne();
    this.chart?.update();
  }
}
