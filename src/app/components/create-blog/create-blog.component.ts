import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { getHttpOptions } from "src/app/helper/helper";
import { BlogService } from "src/app/services/blog.service";

@Component({

    selector: 'pm-create-blog',

    templateUrl: './create-blog.component.html',

    styleUrls: ['./create-blog.component.css']

})

export class CreateBlogComponent implements OnInit {

    constructor(private blogService: BlogService, private router: Router) { }

    blogForm!:FormGroup;
    submitted: boolean=false;
    errorMessage:string='';
    isPublishFailed:boolean=false

    ngOnInit(): void {
        this.blogForm=new FormGroup({
            title: new FormControl("", Validators.required),
            description: new FormControl("", Validators.required),
            body:new FormControl("", Validators.required)
        })
    }

    handlePublish(): void {

        this.submitted=true;

        const {title, description,body}=this.blogForm.value

        if (this.blogForm.valid){

            this.blogService.createBlog({title,description,body}).subscribe({

                next: data => {

                    this.router.navigate(['/'])

                    // console.log('create data call: ', data)
                },
                error: err => {

                    this.errorMessage=err.error.message;
                    this.isPublishFailed=true


                    console.log('err create blog: ', err)
                }
            })
        }
    }

}