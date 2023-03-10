import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CustomeComponent } from './custome/custome.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { UserTableComponent } from './user-table/user-table.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
// import { CustompipePipe } from './custompipe.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgClass, NgComponentOutlet, NgForOf, NgIf, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    CustomeComponent,
    TemplateformComponent,
    UserTableComponent,
    PipeexampleComponent,
    Comp1Component,
    Comp2Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgClass,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  

}
