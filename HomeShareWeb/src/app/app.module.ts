import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { CarteMaisonComponent } from './composants/carte-maison/carte-maison.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { AjoutBienComponent } from './pages/ajout-bien/ajout-bien.component';

import { CarteBienComponent } from './composants/carte-bien/carte-bien.component';
import { CarteMembreComponent } from './composants/carte-membre/carte-membre.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    InscriptionComponent,
    CarteMaisonComponent,
    HomeComponent,

    AjoutBienComponent

    CarteBienComponent,
    CarteMembreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
