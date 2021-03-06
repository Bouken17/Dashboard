import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MairieComponent } from './mairie/mairie.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'mairie', component: MairieComponent },
      { path: 'compte', component: CompteComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MairieComponent,
    LoginComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
