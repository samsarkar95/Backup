import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http:HttpClient) {}
   
  getMovie(): Observable<any> {
    /* It uses GET request to get data from the url http://localhost:3000/movies 
     2. The API call returns an observable as a response */
    return this.http.get('http://localhost:3000/movies');
  }
  register(regObj:any):Observable<any>{
    return this.http.post('http://localhost:3000/users',regObj)
  }
}
