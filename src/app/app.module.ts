import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { TasksComponent } from './tasks/tasks.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
