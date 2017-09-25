import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyborrowmoneyPage } from './applyborrowmoney';
import { PROVIDERS } from '../../../app/imports';
@NgModule({
  declarations: [
    ApplyborrowmoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyborrowmoneyPage),
  ],
  exports: [
    ApplyborrowmoneyPage
  ],
  providers: [PROVIDERS],
})
export class ApplyborrowmoneyPageModule {}
