import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { PhoneLoginComponent } from './phone-login/phone-login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDEMIMCLhWBJT065AQ5fGPridxi1ACPuXo",
  authDomain: "chatbot-8dd24.firebaseapp.com",
  databaseURL: "https://chatbot-8dd24.firebaseio.com",
  storageBucket: "chatbot-8dd24.appspot.com",
  messagingSenderId: "3666865050"
};

@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
