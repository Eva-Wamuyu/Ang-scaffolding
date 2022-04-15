import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../basicrouting.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BasicService) { }

  switchPages(page:string){

    this.service.switchPage(page);

  }
  backPage(){
    this.service.switchPage(this.service.lastPage)
    }
   

    allPages:any[] = []
  
  ngOnInit(): void {
    this.allPages = this.service.allPages;
     

  }

}
