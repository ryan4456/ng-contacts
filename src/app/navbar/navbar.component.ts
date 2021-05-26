import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = JSON.parse(window.localStorage.getItem('user') || '{}')
  constructor() { }

  ngOnInit(): void {
  }

}
