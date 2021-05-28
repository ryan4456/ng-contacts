import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.css'],
})
export class TagEditComponent implements OnInit {
  tag: any = {
    id: 0,
    title: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.getTagById(id);
  }

  getTagById(id: number): void {
    this.http
      .get(`http://localhost:3000/tags/${id}`)
      .toPromise()
      .then((data) => {
        this.tag = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(): void {
    const {id} = this.tag 
    this.http
      .patch(`http://localhost:3000/tags/${id}`, this.tag)
      .toPromise()
      .then((data) => {
        this.router.navigate(['/tags']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
