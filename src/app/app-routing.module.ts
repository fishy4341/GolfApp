import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {SetupComponent} from "./setup/setup.component";
import {HolesComponent} from "./holes/holes.component";
import {HolesGuard} from "./holes/holes.guard";
import {CompleteComponent} from "./complete/complete.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'setup', component: SetupComponent },
  {
    path: 'holes/:id',
    component: HolesComponent,
    canActivate: [HolesGuard],
  },
  { path: 'complete', component: CompleteComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
