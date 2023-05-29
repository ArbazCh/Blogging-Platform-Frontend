import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";


@Component({
    selector: 'pm-user-profile',
    templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

    constructor(private authService: AuthService) { }

    name: string = '';

    email: string = '';

    ngOnInit(): void {

        this.authService.getUserDetails().subscribe({

            next: data => {

                this.name = data.name;

                this.email = data.email;

                console.log("user data: ", data)

            },

            error: err => console.log("Error user detail: ", err)
        })
    }

}