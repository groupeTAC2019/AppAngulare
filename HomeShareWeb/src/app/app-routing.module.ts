import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { HomeComponent } from './pages/home/home.component';
import { AjoutBienComponent } from './pages/ajout-bien/ajout-bien.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
//  { path: 'auth', component: AuthComponent },
   { path: '', component: HomeComponent },
   {path:'ajoutBien',component: AjoutBienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
