import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../../providers/util/toast.service';

@IonicPage()
@Component({
  selector: 'page-audit-reason',
  templateUrl: 'audit-reason.html',
})
export class AuditReasonPage {
  id: string;
  data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: ToastService
    ) {
    this.id = navParams.get('id')
  }
  ionViewDidLoad() {
    this.http.get(`phoneApplylend/v1/audit/reason/${this.id}`)
    .then(res => {
      if(JSON.stringify(res.data) !== "{}") {
        this.data = res.data;
      }
    });
  }
}
