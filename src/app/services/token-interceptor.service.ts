import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private authService:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem("access-token")
    const accessToken= req.clone({
     setHeaders:{
      Authorization: `bearer ${token}`
  }})

  // console.log("interceptor: ", accessToken)
  return next.handle(accessToken)
  }

 
}
