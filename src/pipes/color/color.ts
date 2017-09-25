import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ColorPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let result :string;
    switch(value){
        case 'WAITAUDIT'://待审核
          result = 'orange'
          break;
        case 'WAITPAY'://待付款
          result = 'red'
          break;
        case 'WAITRETURN'://待还款
          result = 'green'
          break;
        case 'HASRETURN'://已还款
          result = 'blue'
          break;
        case 'HASLEND'://已借款
          result = 'Gcolor'
          break;
        case 'WAITTHAW'://待解冻
          result = 'grey'
          break;
      }
    return result;
  }
}
