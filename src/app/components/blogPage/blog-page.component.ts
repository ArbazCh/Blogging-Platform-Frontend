import { Component, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { ActivatedRoute } from '@angular/router'
import { IBlog } from "../blogs/blog";

@Component({
    selector: 'pm-blogPage',
    templateUrl: './blog-page.component.html'
})
export class BlogPageComponent implements OnInit {
    constructor(private blogService: BlogService, private route: ActivatedRoute) { }

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
}