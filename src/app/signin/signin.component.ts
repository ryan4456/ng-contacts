import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // data 
  form = {
    email: '',
    password: ''
  }
  error_message: string = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.http.post('http://localhost:3000/session', this.form)
      .toPromise()
      .then((data: any) => {
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/'])
      })
      .catch(err => {
        if(err.status === 401){
          this.error_message = 'Signin Fail'
        }
      })
  }

}
