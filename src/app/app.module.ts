import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoEntryComponent } from './to-do-entry/to-do-entry.component';
import { ToDoViewComponent } from './to-do-view/to-do-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:ToDoEntryComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ToDoEntryComponent,
    ToDoViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
