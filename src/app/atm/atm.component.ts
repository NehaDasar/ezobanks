import { Component } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  accountBalance: number = 0;
  depositAmount: number = 0;
  withdrawAmount: number = 0;
  transactions: string[] = [];

  deposit() {
    if (this.depositAmount > 0) {
      this.accountBalance += this.depositAmount;
      this.transactions.push(`Deposited ${this.depositAmount} INR`);
      this.depositAmount = 0;
    }
  }

  withdraw() {
    if (this.withdrawAmount > 0 && this.accountBalance >= this.withdrawAmount) {
      this.accountBalance -= this.withdrawAmount;
this.transactions.push(`Withdrawn ${this.withdrawAmount} INR`);
      this.withdrawAmount = 0;
    }
  }

}
