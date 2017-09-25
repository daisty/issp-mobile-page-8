import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-applyreimbursement',
  templateUrl: 'applyreimbursement.html',
})
export class ApplyreimbursementPage {
  fixed1 = '2017-08-22';
  person: string = "王博文";
  principal: string = "胡歌";
  area: string = "广州";
  projectName: string = "1461项目规划";
  subjects: string = "人员租赁";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyreimbursementPage');
  }
  todo = {
    description:"例如:交代清楚报销事由"
  };
  logForm(form){
    console.log(form.value)
  }
}
