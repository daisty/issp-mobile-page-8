import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
// import { ContactField, ContactFindOptions, ContactFieldType, Device } from 'ionic-native';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';   
import { ToastService } from '../../providers/util/toast.service';
import { ContactsProvider } from '../../providers/contacts';
import {Contact} from "../../models/contact.model";
import {Group} from "../../models/group.model";
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import { CONTACT } from '../../config/config';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  pet: string = "internal";
  index: string = 'A';
  showModal: boolean = false;
  showSearch: boolean = false;
  timeout: any;
  allContacts: any[];
  allInner: any[];
  allBusiness: any[];
  innerContacts: Array<any> = [];
  exterContacts: Array<any> = [];
  businessContacts: Array<any> = [];
  comContacts: Array<any> = [];
  itemss = [];
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  isAndroid: boolean = false;
  groupName: string;
  searchQuery: string = '';
  searchInput: string;  
  searchControl: FormControl;
  searching: any = false;
  items: any;
  searchItems:any;
  come:any;
 
  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild(Content) content: Content;
  constructor(
    platform: Platform, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: ToastService,
    public ref: ChangeDetectorRef,
    public contactsSever: ContactsProvider) {
    this.isAndroid = platform.is('android');

    for (var i = 0; i < 30; i++) {
      this.itemss.push( this.itemss.length );
    }
    this.searchControl = new FormControl();
    this.initializeItems();
  }
  
  ionViewDidLoad() {
      this.http.get(CONTACT + 'internalcontacts/v1/mobile/list')
      .then( res => {
        this.allInner = this.contactsSever.grouping(res.data);
        this.innerContacts = this.contactsSever.grouping(res.data);
      });
        
      this.http.get(CONTACT + 'externalcontacts/v1/mobile/list')
        .then( res => {
          this.allContacts = this.contactsSever.grouping(res.data);
          this.exterContacts = this.contactsSever.grouping(res.data); 
        })

      this.http.get(CONTACT + 'commercecontacts/v1/mobile/list')
        .then( res => {
          this.allBusiness = this.contactsSever.grouping(res.data);
          this.comContacts = this.contactsSever.grouping(res.data);    
        })
  }
  initializeItems() {
    this.innerContacts = this.allInner;
    this.exterContacts = this.allContacts; 
    this.comContacts = this.allBusiness;
  } 
  getItems(ev: any) {

    let val = ev.target.value;
    
    if(this.come == '内部通讯录'){
      this.innerContacts = this.allInner;   
      if (val && val.trim() != '') {  
        this.innerContacts = this.innerContacts.filter((item) => {  
          for(var i = 0; i < item.contacts.length; i++){
            if(item.contacts[i].username){
              return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }else{
              return false;
            }
          }
        })
      }
    }else if(this.come == '外部通讯录') {
      this.exterContacts = this.allContacts;   
        if (val && val.trim() != '') {  
          this.exterContacts = this.exterContacts.filter((item) => {  
            for(var i = 0; i < item.contacts.length; i++){
              if(item.contacts[i].username){
                return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
              }else{
                return false;
              }
            }
          })
        }
      }else if(this.come == '商务通讯录'){
        this.comContacts = this.allBusiness;   
        if (val && val.trim() != '') {  
          this.comContacts = this.comContacts.filter((item) => {  
            for(var i = 0; i < item.contacts.length; i++){
              if(item.contacts[i].username){
                return (item.contacts[i].username.toLowerCase().indexOf(val.toLowerCase()) > -1);
              }else{
                return false;
              }
            }
          })
        }
      }
   
  } 
  

  openInternalPage(id:string) {
    this.navCtrl.push('InternalAddress', { id: id });
  }

  openOuternalPage(id:string) {
    this.navCtrl.push('ExternalAddress', { id: id });
  }

  openBusinessPage(id:string) {
    this.navCtrl.push('BusinessAddress', { id: id });
  } 
  ionViewDidEnter() {
    this.getOffsetTops();
  }

  getOffsetTops() {
      this.offsetTops = this.ionItemGroup._results.map(ele => {
          return ele.nativeElement.offsetTop
      })
  }

  selectIndex(index: number) {
      this.index = this.indexes[index];
      const offsetTop = this.offsetTops[index];
      this.content.scrollTo(0, offsetTop, 300);
      this.createModal();
  }


  onScroll() {

    const threshold = 42;

    if (this.content.scrollTop < threshold) {
        this.index = this.indexes[0];
        return;
    }

    for (let i = this.offsetTops.length; i > 0; i--) {
        if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
            this.index = this.indexes[i];
            this.ref.detectChanges();
            return;
        }
    }
  }

  // create modal
  createModal() {
      clearTimeout(this.timeout);
      this.showModal = true;
      this.timeout = setTimeout(() => {
          this.showModal = false;
          this.ref.detectChanges();
      }, 800)
  }


  doInfinite(infiniteScroll) {
   

    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.itemss.push( this.itemss.length );
      }

      // console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
