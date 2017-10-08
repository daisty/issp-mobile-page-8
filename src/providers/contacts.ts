import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Contact} from "../models/contact.model";
import {Group} from "../models/group.model";
<<<<<<< HEAD
import { Pinyin } from '../plugins/pinyin';

@Injectable()
export class ContactsProvider {
    searchQuery: string = ''; 
    items: any;
    searchItems:any;
    constructor(public http: Http) {
       
    }


=======

/*
 Generated class for the Contacts provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Contacts {

    constructor(public http: Http) {
        console.log('Hello Contacts Provider');
    }

>>>>>>> team/master
    /**
     * Get contacts data
     * @returns {Promise<TResult|T>}
    //  */
<<<<<<< HEAD
=======
    // getContacts() {
    //     return this.http.get('./assets/data/contacts.json')
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(err => {
    //             return Promise.reject(err)
    //         })
    // }
>>>>>>> team/master

    /**
     * Grouping contacts
     * @param array
     * @returns {any}
     */
<<<<<<< HEAD
    grouping(array): Group[] {
        
        let pin = new Pinyin;
        
=======
    grouping(array: Contact[]): Group[] {

>>>>>>> team/master
        let groupContacts: Group[] = [];
        const letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

        if (array.length <= 0) return [];

        // Create a parent container
        groupContacts = letterStr.split('')
            .map((str) => {
                return {
                    groupName: str,
                    contacts: []
                }
            });

        // Push into the correct group
<<<<<<< HEAD
        groupContacts.forEach((item,index) => {
            
            for (var i = 0;i<array.length;i++) {

                if(array[i].customerName){
                    array[i].username = array[i].customerName;
                }
                if(array[i].username){
                    let aa;
                   if(pin.toPinyin(array[i].username.split('')[0]) == 'undefined'){
                        aa = array[i].username
                   }else{
                        aa = pin.toPinyin(array[i].username);
                   }
                
                    if (aa.split('')[0].toUpperCase() === item.groupName) {
                        item.contacts.push(array[i]);
                    } else if (letterStr.indexOf(aa.split('')[0].toUpperCase()) === -1) {
                    
                        if(index == 26){
                            groupContacts[groupContacts.length - 1].contacts.push(array[i]);
                        }
                        
                    }
                }else{
                    if(index == 26){
                        groupContacts[groupContacts.length - 1].contacts.push(array[i]);
                    }
                }
                
                item.keyLetter = item.contacts.length == 0? false: true;
                
                
=======
        groupContacts.forEach((item) => {

            for (let i of array) {
                if (i.displayName[0].toUpperCase() === item.groupName) {
                    item.contacts.push(i);
                } else if (letterStr.indexOf(i.displayName[0].toUpperCase()) === -1) {
                    groupContacts[groupContacts.length - 1].contacts.push(i)
                }
>>>>>>> team/master
            }

        });

        return groupContacts;

    }

}
