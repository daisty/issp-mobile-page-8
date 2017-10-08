import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';
import { CONTACT } from '../../../config/config';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-internal-address',
  templateUrl: 'internal-address.html',
})
export class InternalAddress {

  id: string;
  detailData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: ToastService,private callNumber: CallNumber) {
    this.id = navParams.get('id');

    this.http.get(CONTACT + `internalcontacts/v1/mobile/findByID/${this.id}`)
    .then( res =>{
      this.detailData = res.data;
    })
  }


  showPrompt(phone) {
    let prompt = this.alertCtrl.create({
      title: this.detailData.phone,
      
      buttons: [
        {
          text: '呼叫',
          handler: data => {
            this.callNumber.callNumber(this.detailData.phone, true)
              .then(() => console.log('Launched dialer!'))
              .catch(() => console.log('Error launching dialer'));
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

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InternalAddress');
  }

}
