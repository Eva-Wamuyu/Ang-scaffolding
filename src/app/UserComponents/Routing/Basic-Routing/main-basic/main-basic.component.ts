import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../basicrouting.service';
@Component({
  selector: 'app-main-basic',
  templateUrl: './main-basic.component.html',
  styleUrls: ['./main-basic.component.css'],
  providers: [BasicService]

})
export class MainBasicComponent implements OnInit {

  allPages: any = [];
  constructor(private basicRouting:BasicService) { }

  ngOnInit(): void {
    this.allPages = this.basicRouting.allPages;
  }

}
