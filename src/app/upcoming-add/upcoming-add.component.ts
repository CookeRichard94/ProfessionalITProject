import { Component, OnInit } from '@angular/core';
import {UpcomingService} from '../services/upcoming.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-upcoming-add',
  templateUrl: './upcoming-add.component.html',
  styleUrls: ['./upcoming-add.component.css']
})
export class UpcomingAddComponent implements OnInit {

  constructor(private service:UpcomingService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.country, form.value.city, form.value.year).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
