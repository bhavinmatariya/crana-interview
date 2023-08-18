import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { ChartComponent } from './component/chart/chart.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: 'landing', component: MainComponent },
  { path: 'task-1', component: ParentComponent },
  { path: 'task-2', component: ChartComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
