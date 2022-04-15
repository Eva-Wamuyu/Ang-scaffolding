import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UserComponents/headerComponent/header.component';
import {FooterComponent} from './UserComponents/footerComponent/footer.component';
import { EventBindingComponent } from './UserComponents/Binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './UserComponents/Binding/property-binding/property-binding.component';
import Assignment from './UserComponents/Basics/Assignment/assignment-component';
import { StructuralDirectivesComponent } from './UserComponents/Basics/structural-directives/structural-directives.component';
import { FormComponentComponent } from './UserComponents/Basics/Forms/form-component/form-component.component';
import { ParentLcycleComponent } from './UserComponents/Intermediary/Hooks/parent-lcycle/parent-lcycle.component';
import { ChildLcycleComponent } from './UserComponents/Intermediary/Hooks/child-lcycle/child-lcycle.component';
import { RendererDirectiveDirective } from './UserComponents/Basics/Directives/renderer-directive.directive';
import { DirectivethatmanipulatesdomDirective } from './UserComponents/Basics/Directives/directivethatmanipulatesdom.directive';
import { HostlistenerdirectiveDirective } from './UserComponents/Basics/Directives/hostlistenerdirective.directive';
import { BankComponent } from './UserComponents/BankProject/bank/bank.component';
import { NewAccComponent } from './UserComponents/BankProject/new-acc/new-acc.component';
import { TemplateDrivenComponent } from './UserComponents/Intermediary/Forms/TemplateDrivenForms/template-driven/template-driven.component';
import { HomeBasicComponent } from './UserComponents/Routing/Basic-Routing/home-basic/home-basic.component';
import { AboutBasicComponent } from './UserComponents/Routing/Basic-Routing/about-basic/about-basic.component';
import { ContactBasicComponent } from './UserComponents/Routing/Basic-Routing/contact-basic/contact-basic.component';
import { MainBasicComponent } from './UserComponents/Routing/Basic-Routing/main-basic/main-basic.component'  //this is a default class, that is why the {}
import { HeaderComponent as hed } from './UserComponents/Routing/Basic-Routing/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    Assignment,
    StructuralDirectivesComponent,
    FormComponentComponent,
    ParentLcycleComponent,
    ChildLcycleComponent,
    RendererDirectiveDirective,
    DirectivethatmanipulatesdomDirective,
    HostlistenerdirectiveDirective,
    BankComponent,
    NewAccComponent,
    TemplateDrivenComponent,
    HomeBasicComponent,
    AboutBasicComponent,
    ContactBasicComponent,
    MainBasicComponent,
    hed
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
