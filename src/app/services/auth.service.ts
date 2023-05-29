import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from 'rxjs';
import { accessToken, apiUrl, httpOptions } from "src/app/helper/helper";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {

        // console.log(email, password)

        return this.http.post(apiUrl + 'auth/login', { email, password }, httpOptions)
    }

    register(name: string, email: string, password: string, confirmPassword: string): Observable<any> {

        return this.http.post(apiUrl + 'user/register', { name, email, password, confirmPassword }, httpOptions)
    }

    isToken(): boolean {

        let isToken: boolean = false

        if (accessToken) isToken = true

        if (!isToken) return false

        return true
    }

    getUserDetails(): Observable<any> {

        return this.http.get(apiUrl + 'auth/user', httpOptions)
    }

}