import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduploadPage } from './addupload.page';

const routes: Routes = [
  {
    path: '',
    component: AdduploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdduploadPageRoutingModule {}
