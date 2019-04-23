//Imports
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
  
  //Draws the constructor from the ReviewService service
  constructor(private route:ActivatedRoute, private service:ReviewService,
  private router:Router) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id']);

    //Retrieves the data of the single specified item by it's id
    this.service.getPost(this.route.snapshot.params['id'])
    .subscribe(data =>
    {
      this.post = data;
    });
  }

  //updates the information of the item with the newly input information
  onEditPost(form: NgForm){
    this.service.updatePost(this.post._id, form.value.title, form.value.content, form.value.city, form.value.rating)
    .subscribe(() => 
  {
      //sends the user back to the review list page
    this.router.navigate(['/review']);
  });
  }

}
