import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'pm-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']

})
export class RegisterComponent {
    constructor(private authService: AuthService, private router: Router) { }

    title: string = "Register Yourself";

    name: string = 'xyz';

    email: string = 'xyz@gmail.com';

    password: string = 'Password@123';

    confirmPassword: string = 'Password@123';

    handleSubmit(): void {

        if (!this.email || !this.password || !this.title || !this.name || !this.confirmPassword) {

            alert('Please enter all required fields.');

        } else {

            this.authService.register(this.name, this.email, this.password, this.confirmPassword).subscribe({

                next: data => {

                    alert("You are registered Successfully, please login")

                    this.router.navigate(['/login'])

                    console.log('register call data: ', data)

                },
                error: err => {

                    if (err.status === 400) {

                        alert(`Bad Request`)
                    }

                    console.log('register call error: ', err)
                }
            })
        }



    }

}