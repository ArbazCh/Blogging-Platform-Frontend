import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map, of } from 'rxjs';
import {  apiUrl, getToken } from "src/app/helper/helper";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }

    private authStatusListener=new Subject<boolean>

    isLoggedIn:boolean=false;

    getAuthStatusListener() {  
        return this.authStatusListener.asObservable();  
      }  

    login(email: string, password: string): Observable<any> {

         return this.http.post(apiUrl + 'auth/login', { email, password }).pipe(

            map((response)=>{

                this.authStatusListener.next(true)
                
            return response
            })
            
         )
    }

    register(name: string, email: string, password: string, confirmPassword: string): Observable<any> {

        return this.http.post(apiUrl + 'user/register', { name, email, password, confirmPassword })
    }

    isToken(): boolean {
        return !! getToken()
    }

    // signOut():Observable<any>{
    //     localStorage.removeItem("access-token");
    //     this.authStatusListener.next(false);
    //     return of(null); // Returning a dummy Observable
    // }

    getUserDetails(): Observable<any> {  
        return this.http.get(apiUrl + 'auth/user')
    }

}





//https://www.javatpoint.com/improving-ui-header-to-reflect-authentication-status-in-mean-stack
        // let isToken: boolean = false
        // if (getToken()) isToken = true
        // if (!isToken) return false
        // return true