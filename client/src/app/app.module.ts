import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { LegendsComponent } from './legends/legends.component';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LegendsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCommonModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule

    
  ],
  entryComponents: [
    LegendsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
