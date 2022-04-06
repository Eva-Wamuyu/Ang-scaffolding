import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  
  hits:number = 0;

  message:string = '';
  constructor() { }
  ngOnInit(): void {}
  
  singleClick(){
    this.hits+=1;

  }
  showMsg(e:any){
    this.message = e.target.value;
  }

  
  
  

}
