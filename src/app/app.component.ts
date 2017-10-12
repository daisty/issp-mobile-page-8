import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Welcome } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ToastService } from '../providers/util/toast.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Welcome;
  public userName =localStorage.getItem("userName");
  public password =localStorage.getItem("password");
  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    public http : ToastService,
    public storage: Storage,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.http.getUser(`v1/login?account=${this.userName}&password=${this.password}`)
        .then(res => {
          if(res.code == 0){
            this.rootPage = Welcome;
            this.storage.set('token',res.data);
          }else {
            this.rootPage = Welcome;
          }
        })
    });
  }
}
