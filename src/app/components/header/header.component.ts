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

export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }



    get isLoggedIn(): boolean{
        console.log("getter called")
        return !! (localStorage.getItem('access-token')) 
    
      }

      ngOnInit(): void {
          console.log("header renderes")
      }

    signOut(): void {

        localStorage.removeItem('access-token')

        this.router.navigate(['/login'])
    }

}