import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  url = "https://jsonplaceholder.typicode.com/users/"
  constructor(private http: HttpClient) { }
  getdata() {
    
    return this.http.get(this.url);
  }
}
