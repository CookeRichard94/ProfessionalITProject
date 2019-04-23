//Imports
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Upcoming} from '../upcoming.model';
import { UpcomingService } from '../services/upcoming.service';

@Component({
  selector: 'app-upcoming-list',
  templateUrl: './upcoming-list.component.html',
  styleUrls: ['./upcoming-list.component.css']
})
export class UpcomingListComponent implements OnInit {

  upcoming: any = [];

  //uses the constructor for items specified in the UpcomingService service
  constructor(private ps:UpcomingService){}

  ngOnInit(){

    //When the page is initiated all of the data in the relevant collection is drawn and presented
    this.ps.getPostsData().subscribe(data => {
        this.upcoming = data;
    });
   }

  //Delete Method
   onDelete(id:String){
     //Ouputs the id of the item to be deleetd to the console window
    console.log("Delete called " + id);
     
     //deletes the specified item by id from the collection
    this.ps.deletePost(id).subscribe(() =>
    {
      //calls the init method again to refresh the page
      this.ngOnInit();
    });

   }
}
