import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-lcycle',
  templateUrl: './parent-lcycle.component.html',
  styleUrls: ['./parent-lcycle.component.css']
})
export class ParentLcycleComponent implements OnInit, OnChanges{

  parentText = '';
  inputText = '';
  constructor() {
    console.log("this is the parent constructor");
   }

   messagesetOnInitialize!: string;
  ngOnInit(): void {
    this.messagesetOnInitialize = 'I am in ngOnInit()';
    console.log("this is the PARENT ngOnInit")
  }

  i = 0;
  ngOnChanges( changes: SimpleChanges) :void {
    this.i++;
    // console.log("parent onchanges hook");
    console.log(changes);
   
  }











  exampleHooks = [" ngOnChanges()", "ngOnInit()", "ngAfterViewInit()", "ngOnDestroy()", "ngOnChanges()"];
  meaningHooks = [`Respond when Angular sets or resets data-bound input properties.`,
  `Called the instance the component is called`,
  ``,
  ``,
  ``];

}
