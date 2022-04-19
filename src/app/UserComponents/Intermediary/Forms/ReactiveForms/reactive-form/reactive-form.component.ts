import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  theForm!: FormGroup;
  see = false;
  petDetails = {petName: "",petAge: 0,petOwner: "",petMail: ""};
  

  constructor() { }

  ngOnInit(): void {

    this.theForm = new FormGroup({
      petName:new FormControl("",Validators.required),
      petAge: new FormControl(0, Validators.required),
      petOwner: new FormControl("", Validators.required),
      petMail: new FormControl("", [Validators.email, Validators.required])
    })
  }

  onSubmit = ()=>{
   
    this.see = true;
     this.petDetails = this.theForm.value;
     this.theForm.reset();
  
    
   
  }

}
