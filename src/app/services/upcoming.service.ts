import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Upcoming} from '../upcoming.model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/upcoming");
  }

  private upcoming: Upcoming[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.upcoming];
  }

  addPost(country: string, city: string, year: number): Observable<any> {
    const upcoming: Upcoming = {country: country, city: city, year:year};
    return this.http.post("http://localhost:8081/api/upcoming",upcoming);
  }

  deletePost(id:String):Observable<any>{
    return this.http.delete("http://localhost:8081/api/upcoming/"+id);
  }

  getPost(id:String):Observable<any>{
    return this.http.get("http://localhost:8081/api/upcoming/"+id);
  }

  updatePost(id:String, country: string, city: string, year: number):Observable<any> {
    const upcoming: Upcoming = {country: country, city: city, year:year};
    return this.http.put("http://localhost:8081/api/upcoming/"+id, upcoming);
  }

}
