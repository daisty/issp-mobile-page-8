import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowAuditopinonPage } from './borrow-auditopinon';
import { SharedModule } from '../../../app/shared.module';
import { PROVIDERS } from '../../../app/imports';

@NgModule({
  declarations: [
    BorrowAuditopinonPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowAuditopinonPage),
    SharedModule
  ],
  exports: [
    BorrowAuditopinonPage
  ],
  providers: [PROVIDERS]
})
export class BorrowAuditopinonPageModule {}
