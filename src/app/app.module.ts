import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UserComponents/headerComponent/header.component';
import {FooterComponent} from './UserComponents/footerComponent/footer.component';
import { EventBindingComponent } from './UserComponents/Binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './UserComponents/Binding/property-binding/property-binding.component';
import Assignment from './UserComponents/Basics/Assignment/assignment-component'  //this is a default class, that is why the {}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    Assignment
    
   
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
