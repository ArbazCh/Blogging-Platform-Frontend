import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { emailPattern } from "src/app/helper/helper";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'pm-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

//    regData:any={ 
    
//     name: 'xyz',

//     email: 'xyz@gmail.com',

//     password:'Password@123',

//     confirmPassword: 'Password@123'}

    isRegFailed:boolean=false;

    errMessage:string='';
    
    submitted:boolean=false;

    regForm!:FormGroup;

    ngOnInit(): void {
        this.regForm=new FormGroup({
            name :new FormControl("", Validators.required),
            email:new FormControl("",[Validators.required, Validators.pattern(`${emailPattern}`)]),
            password:new FormControl("", Validators.required),
            confirmPassword : new FormControl("", Validators.required)
        })
    }


    handleSubmit(): void {

        // console.log("ngForm: ,",register)
        this.submitted=true

        if(this.regForm.valid){
            
            const {name,email,password,confirmPassword} = this.regForm.value
    
                this.authService.register(name, email, password, confirmPassword).subscribe({
    
                    next: data => {
    
                        alert("You are registered Successfully, please login")
    
                        this.router.navigate(['/login'])
    
                        console.log('register call data: ', data)
    
                    },
                    error: err => {
    
                        this.isRegFailed=true
                        this.errMessage=err.error.message
    
                        console.log('register call error: ', err)
                    }
                })
        }
        

    }

}