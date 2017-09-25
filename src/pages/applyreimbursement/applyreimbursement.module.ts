import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyreimbursementPage } from './applyreimbursement';

@NgModule({
  declarations: [
    ApplyreimbursementPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyreimbursementPage),
  ],
  exports: [
    ApplyreimbursementPage
  ]
})
export class ApplyreimbursementPageModule {}
