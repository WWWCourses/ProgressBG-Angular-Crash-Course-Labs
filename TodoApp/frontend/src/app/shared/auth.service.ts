import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "./user";


@Injectable({ providedIn: 'root' })
export class AuthService {
    public baseUrl = "http://localhost:8080";
    private loggedUserSubject: BehaviorSubject<any>;
    public loggedInUser: Observable<any>;

    constructor(private http: HttpClient) {
        let loggedUser = localStorage.getItem('loggedInUser') || "{}"
        loggedUser = JSON.parse(loggedUser  )
        this.loggedUserSubject = new BehaviorSubject(loggedUser);
        this.loggedInUser = this.loggedUserSubject.asObservable();
    }

    loginUser(emailAddress: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/api/login`, { emailAddress, password })
            .pipe(map(response=> {
                localStorage.setItem('loggedInUser', JSON.stringify(response));
                this.loggedUserSubject.next(response);
                console.log(response);
                return response;
            }));
    }

    logoutUser() {
        localStorage.removeItem('loggedInUser');
        this.loggedUserSubject.next(null);
    }
    public get loggedInUserValue(){
        return this.loggedUserSubject.value;
    }
}