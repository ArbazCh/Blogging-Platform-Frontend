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

    isLoggedin:boolean=false;

    ngOnInit(): void {

        this.isLoggedin= sessionStorage.getItem('isLoggedIn') === 'true'
        this.fetchBlog()

    }

    fetchBlog():void{
        this.blogService.getBlogBYId(this.id).subscribe({

            next: data => {

                this.blog = data

                this.comments=data[0].comments

                // this.comments = data[0].comments.sort((a: { createdAt: Date }, b: { createdAt : Date}) => {

                //   (new Date(a.createdAt).getDate())-(new Date(b.createdAt).getDate())

                // });

            },
            error: err => console.log('blog/id err: ', err)
        })
    }

    deleteBlog(): void {

        this.blogService.deleteBlog(this.blog[0].id).subscribe({

            next: data => {

                this.router.navigate(['/blogs'])

                console.log("delete blog call: ", data)
            },
            error: err => console.log("err: ", err)
        })
    }

    onSubmit():void{
        this.blogService.addComment(this.id,this.content).subscribe({
            next:data=>{

                this.content='';
                this.fetchBlog();
                console.log("comment call: ", data)
            },
            error:err=>console.log("err comment :", err)
        })
    }
}