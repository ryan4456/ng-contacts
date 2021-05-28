import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  formData = {
    name: '',
    phone: '',
    id: 0,
    email: ''
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id 
    this.getContactById(id)
  }

  getContactById(id: number): void {
    this.http.get(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then((data: any) => {
      this.formData = data 
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSubmit(): void {
    const {id} = this.formData 
    this.http.patch(`http://localhost:3000/contacts/${id}`, this.formData)
    .toPromise()
    .then(data => {
      this.router.navigate(['/contacts'])
    })
    .catch(err => {
      console.log(err)
    })
  }

}
