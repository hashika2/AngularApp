import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private Url:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.Url);

  }
}
