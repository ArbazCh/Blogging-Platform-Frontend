import { Component, Input, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { ActivatedRoute, Router } from '@angular/router'
import { IBlog } from "../my-blogs/blog";
import { AuthService } from "src/app/services/auth.service";
// import { getHttpOptions } from "src/app/helper/helper";

@Component({

    selector: 'pm-blogPage',

    templateUrl: './blog-page.component.html',

    styleUrls: ['./blog-page.component.css']

})

export class BlogPageComponent implements OnInit {

    constructor(
        private blogService: BlogService, 
        private route: ActivatedRoute, 
        private router: Router,
        ) { }

    content!:string;

    comments:any[]=[]

    blog: IBlog[] = [];

    id =Number( this.route.snapshot.paramMap.get('id'));

    isLoogedin:boolean=false;

    ngOnInit(): void {

        this.isLoogedin= sessionStorage.getItem('isLoggedIn') === 'true'
        // console.log("status: ",this.isLoogedin)

        this.blogService.getBlogBYId(this.id).subscribe({

            next: data => {

                this.blog = data
                this.comments=data[0].comments

                console.log('blog/id call data: ', data)
            },
            error: err => console.log('blog/id err: ', err)
        })
    }

    deleteBlog(): void {

        this.blogService.deleteBlog(this.blog[0].id).subscribe({

            next: data => {

                this.router.navigate(['/'])

                // alert("Your blog has deleted successfully")

                console.log("delete blog call: ", data)
            },
            error: err => console.log("err: ", err)
        })
    }

    onSubmit():void{
        this.blogService.addComment(this.id,this.content).subscribe({
            next:data=>{
                console.log("comment call: ", data)
            },
            error:err=>console.log("err comment :", err)
        })
    }
}