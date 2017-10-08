import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';
import { CONTACT } from '../../../config/config';

@IonicPage()
@Component({
  selector: 'page-business-address',
  templateUrl: 'business-address.html'
})

export class BusinessAddress {

  id: string;
  businessData: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public http: ToastService
    ) {
      this.id = navParams.get('id');
      this.http.get(CONTACT + `commercecontacts/v1/mobile/findByID/${this.id}`,{})
        .then( res =>{
          this.businessData = res.data;
        })
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: this.businessData.tel,
      buttons: [
        {
          text: '呼叫',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '取消',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  businessOther(id:string){
    this.navCtrl.push('BusinessOther', {id:id});
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad BusinessAddress');
  }

}
