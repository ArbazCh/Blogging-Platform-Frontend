import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'pm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }
    title: string = 'Login';
    email: string = 'arbazch1111@gmail.com';
    password: string = 'Password@123';

    ngOnInit(): void {
        // console.log("OnInit: ", this.email, this.password)
    }

    handleLogin(): void {
        this.authService.login(this.email, this.password).subscribe({
            next: data => {
                console.log("login data: ", data)
                localStorage.removeItem("access-token");
                localStorage.setItem("access-token", data.access_token);
                this.router.navigate(['/'])
                // console.log("access-token", data.access_token)

            },
            error: err => console.log("Error :", err)
        })
    }

}