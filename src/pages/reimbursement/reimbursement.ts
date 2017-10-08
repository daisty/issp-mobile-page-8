import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyreimbursementPage } from './applyreimbursement/applyreimbursement';
import { ReimdetailsPage } from './reimdetails/reimdetails';
import { ToastService } from '../../providers/util/toast.service';

@IonicPage()
@Component({
  selector: 'page-reimbursement',
  templateUrl: 'reimbursement.html',
})
export class ReimbursementPage {
  private show :boolean = false;
  private index : number = 0;
  private seleFont :string;
  private statusButton :any;
  private statusL: string = 'ALL';//报销请求状态
  private pageNum:number = 1;//分页
  private items:any = [
    {
      value:'全部'
    },
    {
      value:'待分析'
    },
    {
      value:'待审核'
    },
    {
      value:'待核对'
    },
    {
      value:'已报销'
    },
    {
      value:'待解冻'
    }
  ];
  private status : any = [
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-22',
      date:'2017-08-31',
      currentStatus:'待审核'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-23',
      date:'2017-08-31',
      currentStatus:'待分析'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-24',
      date:'2017-08-31',
      currentStatus:'待核对'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-25',
      date:'2017-08-31 10:00:00',
      currentStatus:'已报销'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-26',
      date:'2017-08-31',
      currentStatus:'待解冻'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-22',
      date:'2017-08-31',
      currentStatus:'待审核'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-23',
      date:'2017-08-31',
      currentStatus:'待分析'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-24',
      date:'2017-08-31',
      currentStatus:'待核对'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已报销'
    },
    {
      nameWipe:'王博文的报销',
      wipeTime:'报销发生时间：2017-08-26',
      date:'2017-08-31',
      currentStatus:'待解冻'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:ToastService) {
    for(let i = 0;i < this.status.length; i++){
      let currentColor =this.status[i].currentStatus
        switch(currentColor){
          case '待审核':
            this.status[i].color = 'orange'
          break;
          case '待分析':
            this.status[i].color = 'danger'
          break;
          case '待核对':
            this.status[i].color = 'green'
          break;
          case '已报销':
            this.status[i].color = 'blue'
          break;
          case '待解冻':
            this.status[i].color = 'light'
          break;
          case '无报销':
            this.status[i].color = 'light'
          break;
        }
    }
  }

  ionViewDidLoad() {
    this.statusButton = this.status;
    this.http.get('phoneReimburse/v1/listAll',{reimPhoneSelectStatus:this.statusL,page:this.pageNum})
    .then(res => {
      this.status = res.data;
    });
  }
  selectFilter(i:number,val:string) :any {
    this.show = !this.show;
    this.index = i;
    this.seleFont = val;
    if (val && val.trim() != '') {
      this.statusButton = this.status.filter((item) => {
        if(val == '全部')return item;
        if(item.currentStatus == val){
          return item;
        }
      })
    }
  }


  apply() {
    this.navCtrl.push('ApplyreimbursementPage');
  }

  toDetail(name:string){
    this.navCtrl.push('ReimdetailsPage' ,{name:name});
  }

}
