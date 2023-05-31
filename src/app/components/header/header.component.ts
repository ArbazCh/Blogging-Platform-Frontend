import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getToken } from "src/app/helper/helper";
import { AuthService } from "src/app/services/auth.service";
// import { accessToken } from "src/app/helper/helper";

@Component({

    selector: 'pm-header',

    templateUrl: './header.component.html',

    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private router: Router, private authService:AuthService) { }



    get isLoggedIn(): boolean{
        return !! (localStorage.getItem('access-token')) 
      }
//
    signOut(): void {

        localStorage.removeItem('access-token')

        alert("You are logged out")

        this.router.navigate(['/login'])
    }

}