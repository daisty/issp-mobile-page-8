import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import $ from 'jquery';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ToastService {
  private rs:any = {msg:'?'};
  private token:string = '98583469460d423fa85a04f0d4ba1e64.3232235640.1505879087257';

  constructor(
      public http:Http
) { 
    
}

   get(url:any,option?:any) {
       let headers = new Headers({
        'userToken':this.token});
       return this.http.get('/api/'+ url + this.toQueryString(option),new RequestOptions({headers: headers}))
        .toPromise()
        .then(res => this.handleSuccess(res.json()))
        .catch(error => this.handleError(error));
   }

   public post(url: string, paramObj: any) {
     let headers = new Headers({
         'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8",
         'userToken':this.token});
     return this.http.post('/api/'+ url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
       .toPromise()
       .then(res => this.handleSuccess(res.json()))
       .catch(error => this.handleError(error));
   }

   public put(url: string, paramObj?: any) {
     let headers = new Headers({
         'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8",
         'userToken':this.token});
     return this.http.put('/api/'+ url,this.toBodyString(paramObj), new RequestOptions({headers: headers}))
       .toPromise()
       .then(res => this.handleSuccess(res.json()))
       .catch(error => this.handleError(error));
   }

   //处理成功之后数据
   private handleSuccess(result) {
     if(result){
        if (result.code == 0) {
          return result;
        }else{
            this.rs.msg = result.msg;
            this.rs.code = result.code;
          return this.rs;
        }
     }
   }
   //抓取错误
   private handleError(error: Response | any) {
     let msg = '请求失败';
     return {success: false, msg: msg};
   }

   //将put请求参数解析
   private toBodyString(obj) {
     let ret = [];
     for (let key in obj) {
       key = encodeURIComponent(key);
       let values = obj[key];
       if (values && values.constructor == Array) {//数组
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         ret = ret.concat(queryValues);
       } else { //字符串
         ret.push(this.toQueryPair(key, values));
       }
     }
     return ret.join('&');
   }

   //解析get请求参数
   private toQueryString(obj) {
     let ret = [];
     if(JSON.stringify(obj) == "{}" || !obj)return ''
     for (let key in obj) {
       key = encodeURIComponent(key);
       let values = obj[key];
       if (values && values.constructor == Array) {//数组
         let queryValues = [];
         for (let i = 0, len = values.length, value; i < len; i++) {
           value = values[i];
           queryValues.push(this.toQueryPair(key, value));
         }
         ret = ret.concat(queryValues);
       } else { //字符串
         ret.push(this.toQueryPair(key, values));
       }
    }
    return '?' + ret.join('&');
   }
   //处理参数的格式 key = value
   private toQueryPair(key, value) {
     if (typeof value == 'undefined') {
       return key;
     }
     return key + '=' + encodeURIComponent(value === null ? '' : String(value));
   } 
}