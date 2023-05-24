import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { apiUrl, httpOptions } from "src/app/helper/helper";

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

}