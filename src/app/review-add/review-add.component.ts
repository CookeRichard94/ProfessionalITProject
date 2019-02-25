import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  constructor(private service:ReviewService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content, form.value.city, form.value.rating).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
