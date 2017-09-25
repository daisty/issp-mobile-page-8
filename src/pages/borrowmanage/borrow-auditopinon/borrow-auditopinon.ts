import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ViewController } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';

@IonicPage()
@Component({
  selector: 'page-borrow-auditopinon',
  templateUrl: 'borrow-auditopinon.html',
})
export class BorrowAuditopinonPage {
  radio:boolean = true;
  paramObj :any={chargerPass:'是'};
  id :string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public http :ToastService
  ) {
    this.paramObj.id = navParams.get('id');
  }
  
  ionViewDidLoad() {
    
  }
  confirm() :void{
    this.paramObj.chargerPass = this.paramObj.chargerPass?'是':'否';
    this.http.put('phoneApplylend/v1/waitPay/allAudit',this.paramObj)
    .then(res => {
      let msg:string;
      if(res.code == 0){
        msg = '此次审核成功!';
      }else {
        msg = `审核失败：${res.msg}`;
      }
      let confirm = this.alertCtrl.create({
        title: '消息提示',
        message: msg,
        buttons: [
            {
              text: '确认',
              handler: () => {
                if(!res.msg){
                  this.navCtrl.push('BorrowManagePage');
                }
              }
            }
          ]
        });
        confirm.present();
    })
  }
  dismiss() {
    this.viewCtrl.dismiss({a:'AllenWei'});
  }
}
