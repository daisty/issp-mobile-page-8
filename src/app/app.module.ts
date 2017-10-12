import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';//获取摄像头
import { Geolocation } from '@ionic-native/geolocation';//获取定位
import { ImagePicker } from '@ionic-native/image-picker';//获取图片
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';//拨打电话号码


import { WelcomeModule } from '../pages/welcome/welcome.module';
import { LoginPageModule } from '../pages/login/login.module';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPage } from '../pages/reimbursement/reimbursement';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { SharedModule } from './shared.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiPickerModule } from 'ion-multi-picker';
import { PROVIDERS } from './imports';


//通讯录
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { ToastService } from '../providers/util/toast.service';
import { ContactsProvider } from '../providers/contacts';

@NgModule({
  declarations: [
    MyApp,
    // Welcome,

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ], 
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    SettingPageModule,
    ReimbursementPageModule,
    WelcomeModule,

    MultiPickerModule ,
    SharedModule,
    ContactsPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    ReimbursementPage,
  ],
  providers: [
    StatusBar,
    PROVIDERS,
    SplashScreen,
    ImagePicker,
    Camera,
    CallNumber,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider
  ]
})
export class AppModule {}
