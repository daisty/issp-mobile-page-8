import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';
import { CONTACT } from '../../../config/config';

@IonicPage()
@Component({
  selector: 'page-external-address',
  templateUrl: 'external-address.html'
})
export class ExternalAddress {

  id: string;
  exterData: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public http: ToastService
    ) {
      this.id = navParams.get('id');
      this.http.get(CONTACT + `externalcontacts/v1/mobile/findByID/${this.id}`)
      .then( res =>{
        this.exterData = res.data;
      })
  }

  // openModal(characterNum) {
    
  //   let modal = this.modalCtrl.create('ModalContentPage', characterNum);
  //   modal.present();
  // }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: this.exterData.phone,
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

  itemOther(id:string){
    this.navCtrl.push('ExternalOther',{id:id});
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad ExternalAddress');
  }

}
