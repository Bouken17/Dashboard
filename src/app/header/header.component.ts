import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToHome() {
    this.router.navigateByUrl('dashboard/home');
  }
  redirectToMairie() {
    this.router.navigateByUrl('dashboard/mairie');
  }

  redirectToCompte() {
    this.router.navigateByUrl('dashboard/compte');
  }

  logOut() {
    this.router.navigateByUrl('login');
  }

}
