//imports
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

  //Draws the constructors from the ReviewService service
  constructor(private ps:ReviewService){}

  //When the page is opened the items are all drawn from the service
  ngOnInit(){

    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }
  
//Delete Method
   onDelete(id:String){
     //Outputs the id of the item to be deleted to the console
    console.log("Delete called " + id);
     //deletes the specified item and then re-initiates the page
    this.ps.deletePost(id).subscribe(() =>
    {
      this.ngOnInit();
    });
   }
}


