import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ReviewService} from '../services/review.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css']
})
export class ReviewUpdateComponent implements OnInit {

  post : any = [];
  constructor(private route:ActivatedRoute, private service:ReviewService,
  private router:Router) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id']);

    this.service.getPost(this.route.snapshot.params['id'])
    .subscribe(data =>
    {
      this.post = data;
    });
  }

  onEditPost(form: NgForm){
    this.service.updatePost(this.post._id, form.value.title, form.value.content, form.value.city, form.value.rating)
    .subscribe(() => 
  {
    this.router.navigate(['/review']);
  });
  }

}
