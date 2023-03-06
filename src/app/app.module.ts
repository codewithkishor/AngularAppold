import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CustomeComponent } from './custome/custome.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { UserTableComponent } from './user-table/user-table.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustompipePipe } from './custompipe.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    CustomeComponent,
    TemplateformComponent,
    UserTableComponent,
    PipeexampleComponent,
    CustompipePipe,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
