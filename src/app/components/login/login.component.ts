import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { accessToken } from "src/app/helper/helper";

@Component({
    selector: 'pm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) { }

    form: any = {
        email: '', //arbazch1616@gmail.com
        password: '' //Password@123
    }

    isLoggedinFailed: boolean = false;
    errorMessage: string = '';

    handleLogin(login: NgForm): void {

        // console.log("Form Submitted!!!", login.validator)

        const { email, password } = this.form

        this.authService.login(email, password).subscribe({

            next: data => {

                console.log("login data: ", data)

                localStorage.removeItem("access-token");

                localStorage.setItem("access-token", data.access_token);

                this.router.navigate(['/'])

            },
            error: err => {

                this.isLoggedinFailed = true;

                this.errorMessage = err.error.message
            }
        })



    }

}