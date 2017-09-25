import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPage } from '../pages/reimbursement/reimbursement';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { ApplyreimbursementPage } from '../pages/applyreimbursement/applyreimbursement';
import { SharedModule } from './shared.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiPickerModule } from 'ion-multi-picker';
import { PROVIDERS } from './imports';


//通讯录
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { ToastService } from '../providers/util/toast.service';
import { HttpModule } from '@angular/http';
import { Contacts } from '../providers/contacts';

// modals
// import { ExternalAddress as  ModalContentPage } from '../pages/contacts/external-address/external-address';
@NgModule({
  declarations: [
    MyApp,
    Home
    
  ],

  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
    }),
    SettingPageModule,
    ReimbursementPageModule,

    MultiPickerModule ,
    SharedModule
    BorrowManagePageModule,
    BorrowDetailPageModule,
    ApplyborrowmoneyPageModule,
    AccordionListPageModule,
    ContactsPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home

  ],
  providers: [
    StatusBar,
    PROVIDERS,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastService,
    Contacts
  ]
})
export class AppModule {}
