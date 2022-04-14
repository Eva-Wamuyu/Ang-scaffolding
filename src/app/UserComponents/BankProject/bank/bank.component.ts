import { Component, OnInit } from '@angular/core';
import { BankingService } from '../Services/banking-service.service';
import { LoginService } from '../Services/login-service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers: [BankingService, LoginService]
})
export class BankComponent implements OnInit {

  constructor(private banksvs:BankingService) { }

  accounts: {name:string, bal:number, accType:string }[] = []

  ngOnInit(): void {
    this.accounts = this.banksvs.accounts;
  }
     

}
