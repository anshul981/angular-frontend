import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>; 
  isLoggedIn:boolean; 
  apiURL = 'http://localhost:3000';
  handleError: any;
    constructor(private http: HttpClient, private router: Router) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
    }
  
     public get userValue(): User {
          return this.userSubject.value
      }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
          })
    }
    createUser(user): Observable<User> {
      return this.http.post<User>(`${this.apiURL}/user/new`, JSON.stringify(user), this.httpOptions);
    }
    loginUser(user):Observable<User>{
      localStorage.setItem('user', JSON.stringify(user));
      return this.http.post<User>(`${this.apiURL}/user/login`, JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.errorHandler));
      let isLoggedIn = true;
      
    }
    errorHandler(error:HttpErrorResponse){
      alert('Login error');
      return Observable.throw(error.message || "server error.");
    }
}
