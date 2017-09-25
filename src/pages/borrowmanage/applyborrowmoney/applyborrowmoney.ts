import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';

@IonicPage()
@Component({
  selector: 'page-applyborrowmoney',
  templateUrl: 'applyborrowmoney.html',
})
export class ApplyborrowmoneyPage {
  aa:string ;
  paramObj :any={};
  Iamges:any = [
    {
      id: 1,
      url: 'assets/imgs/userImage1.png'
    },
    {
      id: 2,
      url: 'assets/imgs/userImage1.png'
    },
    {
      id: 3,
      url: 'assets/imgs/userImage2.png'
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:ToastService,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('id')){
      this.http.get(`phoneApplylend/v1/info/lend/${this.navParams.get('id')}/${this.navParams.get('name')}`)
      .then(res => {
        this.paramObj = res.data;
      });
    }
  }
  addImage() {
    let o:any = {id:this.Iamges.length,url:'assets/imgs/userImage2.png'};
    this.Iamges.push(o);
  }
  delImage(val:number) :void{
    this.Iamges.splice(val,1);
  }
  //提交
  submit() :void{
    if(this.navParams.get('id')){
      this.http.put('phoneApplylend/v1/error',this.paramObj)
      .then(res => {
        let msg:string;
        if(res.code == 0){
          msg = '此次编辑成功!';
        }else {
          msg = `编辑失败：${res.msg}`;
        }
        let confirm = this.alertCtrl.create({
          title: '消息提示',
          message: msg,
          buttons: [
              {
                text: '确认',
                handler: () => {
                  if(!res.msg)this.navCtrl.push('BorrowManagePage');
                }
              }
            ]
          });
          confirm.present();
      })
    }else{
      this.http.post('phoneApplylend/v1/add',this.paramObj)
    .then(res => {
      let msg:string;
      if(res.code == 0){
        msg = '此次申请借款成功!';
      }else {
        msg = `借款失败：${res.msg}`;
      }
      let confirm = this.alertCtrl.create({
        title: '消息提示',
        message: msg,
        buttons: [
            {
              text: '确认',
              handler: () => {
                if(!res.msg)this.navCtrl.push('BorrowManagePage',{tab:true});
              }
            }
          ]
        });
        confirm.present();
    })
    }
  }
   
}
