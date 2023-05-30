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

   regData:any={ name: 'xyz',

    email: 'xyz@gmail.com',

    password:'Password@123',

    confirmPassword: 'Password@123'}

    handleSubmit(): void {
        
        const {name,email,password,confirmPassword}=this.regData

            this.authService.register(name, email, password, confirmPassword).subscribe({

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