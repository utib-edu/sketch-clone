import { Component, OnInit } from '@angular/core';
// import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'utib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  account: any;
  // constructor(private msalService: MsalService) { }

  // ngOnInit(): void {
  //   this.getCurrentAccount();
  // }

  // private getCurrentAccount() {
  //   const accounts = this.msalService.instance.getAllAccounts();
  //   if (accounts.length) {
  //     this.account = accounts[0];
  //   }
  // }

  // public logout = () => {
  //   this.msalService.logout();
  // }
}
