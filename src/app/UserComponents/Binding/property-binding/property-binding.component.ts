import { Component, OnInit } from "@angular/core"

@Component({
  selector: "property-binding",
  templateUrl: "./property-binding.component.html"
})

export class PropertyBindingComponent implements OnInit {

pClass:any = "d-none";

seeContent(){
  this.pClass == "d-block"? this.pClass="d-none": this.pClass = "d-block";
}

constructor () {}


ngOnInit(): void {
}

    


// ngOnInit():void{
// setTimeout(() => {
//   this.pClass = "d-block"
  
// }, 3000);

// }
}