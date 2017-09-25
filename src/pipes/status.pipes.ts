import { Pipe } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe {
  transform(value) {
    let result :string;
    switch(value){
        case 'WAITAUDIT'://待审核
            result = '待审核';
            break;
        case 'WAITPAY'://待付款
            result = '待付款'
            break;
        case 'WAITRETURN'://待还款
            result = '待还款'
            break;
        case 'HASRETURN'://已还款
            result = '已还款'
            break;
        case 'HASLEND'://已借款
            result = '已借款'
            break;
        case 'WAITTHAW'://待解冻
            result = '待解冻'
            break;
        }
    return result;
  }
}
