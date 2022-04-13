 import { Injectable } from "@angular/core";
import { LoginService } from "./login-service";

 @Injectable()
 
 export class BankingService{

  accounts: {name:string, bal:number, accType:string }[] = [] = [
  
  {name:"Eve",bal:100, accType:"Saving"},
  {name:"Adam",bal:200, accType:"Business"},
  {name:"Abel",bal:50, accType:"Junior"}

  ]
  newAcc(obj:{name:string, accType:string }){


    this.accounts.push({...obj, bal:0});
    //destructured since we need two items from the input but the object has 3
  
    this.loginSv.alertFunct();
  }
  constructor(private loginSv: LoginService){

  }



 }