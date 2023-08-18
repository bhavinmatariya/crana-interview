import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartHelper } from '../common/chart-helper';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieComponent extends ChartHelper {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public override data = {
    datasets: [{
      data: [300, 500, 100],
    }],
    labels: ['Label', 'Label 1', 'Label 2']
  }

  public override pushOne(): void {
    super.pushOne();
    this.chart?.update();
  }
}
