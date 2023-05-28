import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { accessToken } from "src/app/helper/helper";

@Component({
    selector: 'pm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router,) { }

    isLoggedIn: boolean = false;

    ngOnInit(): void {
        if (accessToken) this.isLoggedIn = true
    }

    signOut(): void {
        localStorage.removeItem('access-token')
        this.router.navigate(['/login'])
    }

}