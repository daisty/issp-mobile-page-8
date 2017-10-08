import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReimbursementPage } from './reimbursement';
import { ReviewReasonModule } from './reviewReason/reviewReason.module';
import { VerificationModule } from './verification/verification.module';
import { ReimdetailsPageModule } from './reimdetails/reimdetails.module';
import { ReimbursementInvoiceModule } from './reimbursement-invoice/reimbursement-invoice.module';
import { MailingPageModule } from './mailing/mailing.module';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  declarations: [
    ReimbursementPage,
  ],
  imports: [
    IonicPageModule.forChild(ReimbursementPage),
    ReviewReasonModule,
    VerificationModule,
    ReimdetailsPageModule,
    ReimbursementInvoiceModule,
    MailingPageModule,
    PaymentModule
  ],
  exports: [
    ReimbursementPage,
 
  ]
})
export class ReimbursementPageModule {}
