import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncListComponent } from './func-list/func-list.component';
import { FuncAddComponent } from './func-add/func-add.component';
import { FuncEditComponent } from './func-edit/func-edit.component';
import { FuncGetComponent } from './func-get/func-get.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncListComponent,
    FuncAddComponent,
    FuncEditComponent,
    FuncGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
