import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdduploadPageRoutingModule } from './addupload-routing.module';

import { AdduploadPage } from './addupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdduploadPageRoutingModule
  ],
  declarations: [AdduploadPage]
})
export class AdduploadPageModule {}
