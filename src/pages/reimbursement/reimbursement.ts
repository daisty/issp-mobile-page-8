import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyreimbursementPage } from '../applyreimbursement/applyreimbursement';

/**
 * Generated class for the ReimbursementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reimbursement',
  templateUrl: 'reimbursement.html',
})
export class ReimbursementPage {
  show = false;
  isClassVisible: false;
  items = [
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
  status : any = [
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
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
        }
    }
  }
  
  changeColor(): any {
    // this.changeColor() ? '#fff' : '38c0ff';
    // this.show = false;
  }
  setStyles() {
    let styles = {
      'color':  this.changeColor() ? '#fff' : '38c0ff',
      // 'font-size':  this.isDaniel() ? '3em' : '2em',
      // 'font-style':  this.isDaniel() || this.isHoussein() ? 'italic' : 'normal',
    };
    return styles;
  }

  apply() {
    console.log(123);
    this.navCtrl.push(ApplyreimbursementPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReimbursementPage');
  }
  
  // firstname: string = 'Jimmy';
  
  //   changeName () {
  //     this.firstname = this.alternate ? 'Daniel' : 'Houssein';
  //     this.alternate = !this.alternate;
  //   }
  
  //   isHoussein() {
  //     return this.firstname === 'Houssein';
  //   }
  
  //   isDaniel() {
  //     return this.firstname === 'Daniel';
  //   }
  
  //   setStyles() {
  //     let styles = {
  //       'color':  this.isHoussein() ? 'red' : 'black',
  //       'font-size':  this.isDaniel() ? '3em' : '2em',
  //       'font-style':  this.isDaniel() || this.isHoussein() ? 'italic' : 'normal',
  //     };
  //     return styles;
  //   }

}
