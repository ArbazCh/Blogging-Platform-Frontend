import { Component } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";

@Component({
    selector: 'pm-create-blog',
    templateUrl: './create-blog.component.html'
})
export class CreateBlogComponent {
    constructor(private blogService: BlogService) { }

    body: any = {
        title: 'testing ',
        description: 'api from Fe',
        body: '3 paragraphs'
    }


    handlePublish(): void {
        this.blogService.createBlog(this.body).subscribe({
            next: data => console.log('create data call: ', data),
            error: err => console.log('err create blog: ', err)
        })
        // console.log(this.title, this.description, this.body)
    }

}