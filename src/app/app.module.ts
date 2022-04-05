import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UserComponents/headerComponent/header.component';
import {FooterComponent} from './UserComponents/footerComponent/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
