import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisibleDirective } from './directives/visible.directive';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/parent/child/child.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './component/chart/chart.component';
import { MainComponent } from './component/main/main.component';
import { NgChartsModule } from 'ng2-charts';
import { LineComponent } from './component/chart/line/line.component';
import { PieComponent } from './component/chart/pie/pie.component';
import { BarComponent } from './component/chart/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    VisibleDirective,
    ParentComponent,
    ChildComponent,
    ChartComponent,
    MainComponent,
    LineComponent,
    PieComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
