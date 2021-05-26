import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


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

  // methods
  handleSubmit(){
    console.log('submit invoked')
    const formData = this.form 
    this.http.post('http://localhost:3000/users', formData)
      .toPromise()
      .then((data: any) => {
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/'])
      })
      .catch(err => {
        if(err.status === 409){
          this.error_message = 'Email exists'
        }
      })
  }

}
