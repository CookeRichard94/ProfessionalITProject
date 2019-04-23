//Imports
import { Component, OnInit } from '@angular/core';
import {UpcomingService} from '../services/upcoming.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-upcoming-add',
  templateUrl: './upcoming-add.component.html',
  styleUrls: ['./upcoming-add.component.css']
})
export class UpcomingAddComponent implements OnInit {

  //Draws the constructor from the upcomingService service
  constructor(private service:UpcomingService) { }

  //add method
  onAddPost(form: NgForm) {

    //adds the specified values to a new item to be added to the collection
    this.service.addPost(form.value.country, form.value.city, form.value.year).subscribe();
    
    //outputs to the console window
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
