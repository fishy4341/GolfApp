import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { SetupComponent } from './setup/setup.component';
import { HolesComponent } from './holes/holes.component';
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { InfoComponent } from './holes/info/info.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SetupComponent,
    HolesComponent,
    InfoComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
