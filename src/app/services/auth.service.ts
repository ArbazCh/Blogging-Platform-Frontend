import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

const apiUrl: string = 'http://localhost:5000/'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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