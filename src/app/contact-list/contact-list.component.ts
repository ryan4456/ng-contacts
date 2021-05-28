import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadContactList()
  }

  loadContactList(): void {
    this.http.get('http://localhost:3000/contacts')
      .toPromise()
      .then(data => {
        this.contacts = data 
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete(id: number, e: any): void {
    e.preventDefault()
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then(data => {
      this.loadContactList()
    })
    .catch(err => {
      console.log(err)
    })
  }

}
