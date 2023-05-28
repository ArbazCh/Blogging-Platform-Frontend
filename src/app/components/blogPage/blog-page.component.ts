import { Component, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { IBlog } from "../blogs/blog";

@Component({
    selector: 'pm-blogPage',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
    constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

    blog: IBlog[] = [];

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.blogService.getBlogBYId(Number(id)).subscribe({
            next: data => {
                this.blog = data
                console.log('blog/id call data: ', this.blog[0])
            },
            error: err => console.log('blog/id err: ', err)
        })
    }

    deleteBlog(): void {
        this.blogService.deleteBlog(this.blog[0].id).subscribe({
            next: data => {
                this.router.navigate(['/'])
                alert("Your blog has deleted successfully")
                console.log("delete blog call: ", data)
            },
            error: err => console.log("err: ", err)
        })
    }
}