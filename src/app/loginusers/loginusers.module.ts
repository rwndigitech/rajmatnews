import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginusersPageRoutingModule } from './loginusers-routing.module';

import { LoginusersPage } from './loginusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginusersPageRoutingModule
  ],
  declarations: [LoginusersPage]
})
export class LoginusersPageModule {}
