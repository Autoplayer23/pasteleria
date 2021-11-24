import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { Routes,RouterModule } from '@angular/router';

import { PastelComponent } from './pastel/pastel.component';
import { FormPastelComponent } from './pastel/form-pastel.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const routes: Routes=[
  {path:'',redirectTo:'/pastel', pathMatch:'full'},
  {path:'pastel', component: PastelComponent },
  {path:'pastel/form', component:FormPastelComponent },
  {path:'pastel/form/:id', component:FormPastelComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PastelComponent,
    FormPastelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
