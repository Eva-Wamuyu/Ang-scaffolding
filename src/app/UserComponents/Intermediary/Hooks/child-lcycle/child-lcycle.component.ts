import { Component, OnInit, SimpleChanges, OnChanges, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child-lcycle',
  templateUrl: './child-lcycle.component.html',
  styleUrls: ['./child-lcycle.component.css']
})
export class ChildLcycleComponent implements OnInit, OnChanges {
  @Input() text = " ";
  childInput = '';


  constructor() {
    console.log("this is the child constructor");
   }

  ngOnInit(): void {

    console.log("this is the child ngOnInit")
  }

  i = 0;
  ngOnChanges( changes: SimpleChanges) :void {
    console.log("CHILD onchanges hook");
    this.i++;
  }

  ngAfterContentInit(){
    
  }

  

}
