import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreerComponent } from './creer/creer.component';
import { ListesComponent } from './listes/listes.component';
import { ContactComponent } from './contact/contact.component';
import { RouterLinkActive, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({

  declarations: [
    AppComponent,
    IndexComponent,
    CreerComponent,
    ListesComponent,
    ContactComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,  
    FormsModule,
    BrowserAnimationsModule,
    RouterTestingModule,
    RouterModule,
    HttpClientModule,
    NgxPrintModule,
    RouterModule.forRoot([
      {
        path:'', component: IndexComponent
      },
      {
        path:'index', component: IndexComponent
      },
    
      {
        path:'listes', component: ListesComponent
      },
     
      {
        path:'creer', component: CreerComponent
      },
      
      {
        path:'contact', component: ContactComponent
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, CreerComponent, ContactComponent, IndexComponent, ListesComponent]
})
export class AppModule { }
