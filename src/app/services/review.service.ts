import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review} from '../review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  private posts: Review[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string, city: string, rating: number): Observable<any> {
    const post: Review = {title: title, content: content, city: city, rating:rating};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id:String):Observable<any>{
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String):Observable<any>{
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id: string, title: string, content: string, city: string, rating:number):Observable<any> {
    const post: Review = {title: title, content: content, city: city, rating: rating};
    return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }

}
