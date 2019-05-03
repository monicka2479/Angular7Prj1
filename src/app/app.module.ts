import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyDTcN3KoPSj4-VOPB-FMCSeV25p2NtHOQc',
  authDomain: 'sample1-331f0.firebaseapp.com',
  databaseURL: 'https://sample1-331f0.firebaseio.com',
  projectId: 'sample1-331f0',
  storageBucket: 'sample1-331f0.appspot.com',
  messagingSenderId: '715266842838'
};

@NgModule({
declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
],
imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
],
providers: [],
bootstrap: [AppComponent]
})
export  class  AppModule { }


