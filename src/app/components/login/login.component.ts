import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup,Validators } from "@angular/forms";
import { emailPattern } from "src/app/helper/helper";


@Component({
    selector: 'pm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    form!:FormGroup;

    isLoggedinFailed: boolean = false;

    errorMessage: string = '';

    submitted:boolean=false;

    notificationMessage:string=''
    
    ngOnInit(): void {

        this.form=new FormGroup({

            email:new FormControl("arbazch1616@gmail.com", 

            [Validators.required, 

            Validators.pattern(`${emailPattern}`)]),

            password:new FormControl("Password@123",Validators.required)
        })
    }

    handleLogin(): void {

        this.submitted=true;

        if(this.form.valid){

            const { email , password } = this.form.value;

            this.authService.login(email, password).subscribe({
    
                next: data => {
    
                    console.log("login data: ", data)

                    // this.notificationMessage= "You are Logged in"
    
                    localStorage.removeItem("access-token");
    
                    localStorage.setItem("access-token", data.access_token);
    
                    this.router.navigate(['/blogs'])
    
                },
                error: err => {
    
                    this.isLoggedinFailed = true;
    
                    this.errorMessage = err.error.message
                }
            })
        }
          
    }


}