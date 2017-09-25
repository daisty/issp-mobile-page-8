import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Signup } from '../signup/signup';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  rootPage: any;
  items: Array<{ title: string, message?: (any), page?: any }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = 'Welcome';
    this.items = [
      {
        title:'报销管理',
        page:'ReimbursementPage' 
      },
      {
        title:'借款管理',
        page:'BorrowManagePage',
        message:'您有四个待办借款',
      },
      {
        title:'通讯录',
      },
      {
        title:'设置',
        page:'SettingPage'
      }
    ];
  }
  
  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
  // itemSelected(item: string) {
  //   console.log("Selected Item", item);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  login(){
   this.navCtrl.push(Login);
  }

  signup(){
   this.navCtrl.push(Signup, {}, {animate:false});
  }

}
