
import { Component } from "@angular/core";

@Component({
  selector: "interpolation-and-assignment",
  templateUrl: "./assignment-component.html",
  
})

export default class Assignment{
//default class makes it that during importation in the module.ts any name can be used

houses = ["slytherin", "Dumbledore", "Hufflepuffs"];

member = {
  name: "Harry Potter", partner: "Ginny Weasly", wizard: true, powers: ["Magic", "Black Magic", "Occlumency"],age:9
}



}