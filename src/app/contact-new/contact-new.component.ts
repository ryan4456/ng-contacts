import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Contact {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css'],
})
export class ContactNewComponent implements OnInit {
  formData: Contact = {
    name: '',
    phone: '',
    email: '',
  };
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    this.http
      .post('http://localhost:3000/contacts', this.formData)
      .toPromise()
      .then((data) => {
        this.router.navigate(['/contacts']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
