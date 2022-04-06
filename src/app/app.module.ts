import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UserComponents/headerComponent/header.component';
import {FooterComponent} from './UserComponents/footerComponent/footer.component';
import { EventBindingComponent } from './app/UserComponents/Basics/Binding/event-binding/event-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventBindingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
