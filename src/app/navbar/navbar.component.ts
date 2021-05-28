import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = JSON.parse(window.localStorage.getItem('user') || '{}')
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSignout(): void {
    this.http.delete('http://localhost:3000/session')
      .toPromise()
      .then(data => {
        window.localStorage.removeItem('auth_token')
        window.localStorage.removeItem('user')
        this.router.navigate(['/signin'])
      })
      .catch(err => {
        console.log(err)
      })
  }

}
