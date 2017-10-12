import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';
import { Signup } from '../signup/signup';

import { Storage } from '@ionic/storage';
import { HOME } from '../../config/config';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  rootPage: any;
  items: Array<{ title: string, message?: (any), page?: any }>;
  homeName: any = {};
  userName:string="admin";
  empNumer: string;
  temp_userName:string;

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: ToastService, public storage: Storage) {

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
        page:'ContactsPage'
      },
      {
        title:'公告管理',
        page:'AnnouncementPage'
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


  ionViewDidLoad() {

    // this.storage.get('userName').then(val =>{

      // this.temp_userName = val ;
      // this.temp_userName = 'admin' ;
      // if(this.temp_userName){

      //   this.http.get(HOME + 'positiondetailuser/v1/userName/userinfo',{userName: this.temp_userName})
      //     .then(res => {
      //         if(res.code == 0){
      //           this.homeName = res.data;
      //         }

      //     });
      // }
    // });


  
      // this.temp_userName = val ;
      this.temp_userName = 'admin' ;
      if(this.temp_userName){
        
        this.http.get(HOME + 'positiondetailuser/v1/userName/userinfo',{userName: this.temp_userName})
          .then(res => {
              if(res.code == 0){
                this.homeName = res.data;
              }
          
          });
      }
    // });      
    
  }

  login(){
   this.navCtrl.push('LoginPage');
  }

  signup(){
   this.navCtrl.push('LoginPage');
  }

}
