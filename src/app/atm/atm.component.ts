import { Component } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  fixedValue: number = 2000; 
  fixedValue1: number =  500;
  fixedValue2: number =  200;
  fixedValue3: number =  100;
  num2: number=0;
  num3: number=0;
  num4: number=0;
  num5: number=0;
  result!: number;
  result1!: number;
  result2!: number;
  result3!: number;
  deposite!:number;
  accountBalance:number=0 ;
  withdrawAmount: number = 0;
  transactions: string[] = [];
  availableBalance = 1000;
 
  withdrawnAmount!: number;
  newBalance!: number;

  performMultiplication() {
    this.result = this.fixedValue * this.num2;
    this.result1 = this.fixedValue1 * this.num3;
    this.result2 = this.fixedValue2 * this.num4;
    this.result3 = this.fixedValue3 * this.num5;
  }
  deposit(){
    this.deposite=this.result+this.result1+this.result2+this.result3;
this.accountBalance=this.deposite;
  }
  withdraw() {
    if (this.withdrawAmount > this.deposite) {
      // Insufficient funds
      return;
    }

    this.withdrawnAmount = this.withdrawAmount;
    this.newBalance = this.accountBalance - this.withdrawnAmount;
  }
//   withdraw() {
//     if (this.withdrawAmount > 0 && this.accountBalance >= this.withdrawAmount) {
//       this.accountBalance -= this.withdrawAmount;
// this.transactions.push(`Withdrawn ${this.withdrawAmount} INR`);
//       this.withdrawAmount = 0;
//     }
//   }
}
//   accountBalance: number = 0;
//   depositAmount: number = 0;
//   withdrawAmount: number = 0;
//   transactions: string[] = [];

 

 

// }



  // denominations: number[] = [2000 , 500, 200, 100,];
  // depositedAmount: number = 0;
  // withdrawnAmount: number = 0;

  // deposit(amount: number) {
  //   this.depositedAmount += amount;
  // }

  // withdraw(amount: number) {
  //   if (this.depositedAmount >= amount) {
  //     this.withdrawnAmount += amount;
  //     this.depositedAmount -= amount;
  //   } else {
  //     alert('Insufficient funds');
  //   }
  // }