import { Component, OnInit } from '@angular/core';
import { BankingService } from '../Services/banking-service.service';


@Component({
  selector: 'app-new-acc',
  templateUrl: './new-acc.component.html',
  styleUrls: ['./new-acc.component.css'],
  
})
export class NewAccComponent implements OnInit {
  
  name!:string;
  accType!:string;//shuuld work hand in hand woth the service provider class
  constructor(private banksvs: BankingService) { }

  ngOnInit(): void {
  }

  createNewAccount(){
    console.log(this.accType)
    if(this.name == ""||this.accType==""){
      return
    }
     this.banksvs.newAcc({name:this.name, accType:this.accType});
    //  this.logSvs.alertFunct();

  }

}
