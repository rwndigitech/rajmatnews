import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginusersPage } from './loginusers.page';

const routes: Routes = [
  {
    path: '',
    component: LoginusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginusersPageRoutingModule {}
