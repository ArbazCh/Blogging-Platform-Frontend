import { Component, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { IBlog } from "./blog";
import { Router } from "@angular/router";

@Component({
    selector: 'pm-home',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
    constructor(private blogService: BlogService, private router: Router) { }

    blogs: IBlog[] = [];

    ngOnInit(): void {
        this.blogService.getAllBlogs().subscribe({
            next: data => {
                this.blogs = data
                console.log('blog call: ', this.blogs)
            },
            error: err => console.log('blog error: ', err)
        })
    }

    // navigateToBlog(): void {
    //     this.router.navigate(['login'])
    // }


    // reloadPage(): void {
    //     window.location.reload();
    // }
}