import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  // { path: 'home', component: HomeComponent },
  // { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  // { path: 'contactus', component: ContactusComponent }
  { path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
