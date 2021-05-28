import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-new',
  templateUrl: './tag-new.component.html',
  styleUrls: ['./tag-new.component.css'],
})
export class TagNewComponent implements OnInit {
  tag = {
    id: 0,
    title: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    this.http
      .post('http://localhost:3000/tags', this.tag)
      .toPromise()
      .then((data) => {
        this.router.navigate(['/tags']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
