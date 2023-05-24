import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'pm-register',
    templateUrl: './register.component.html'

})
export class RegisterComponent {
    constructor(private authService: AuthService) { }


    title: string = "Register Page";
    name: string = 'xyz';
    email: string = 'xyz@gmail.com';
    password: string = 'Password@123';
    confirmPassword: string = 'Password@123';

    handleSubmit(): void {
        this.authService.register(this.name, this.email, this.password, this.confirmPassword).subscribe({
            next: data => console.log('register call data: ', data),
            error: err => console.log('register call error: ', err)
        })

    }

}