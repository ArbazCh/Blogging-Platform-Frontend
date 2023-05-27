import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'pm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private router: Router) { }
    signOut(): void {
        localStorage.removeItem('access-token')
        this.router.navigate(['/'])
    }
}