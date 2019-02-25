import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../services/review.service';
import { Observable } from 'rxjs';
import {Review} from '../review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  posts: any = [];

  constructor(private ps:ReviewService){}

  ngOnInit(){

    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });


   }

   onDelete(id:String){
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() =>
    {
      this.ngOnInit();
    });

   }
}


