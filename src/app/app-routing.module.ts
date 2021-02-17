import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

const routes: Routes = [
  { path : '', redirectTo: '/dashboard', pathMatch:"full" },
  { path: 'dashboard', component: DashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
