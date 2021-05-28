import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css'],
})
export class TagListComponent implements OnInit {
  list: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadList()
  }

  loadList() {
    this.http
      .get('http://localhost:3000/tags')
      .toPromise()
      .then((data) => {
        this.list = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelete(id: number, e: any): void {
    this.http.delete(`http://localhost:3000/tags/${id}`)
    .toPromise()
    .then(data => {
      this.loadList()
    })
    .catch(err => {
      console.log(err)
    })
  }
}
