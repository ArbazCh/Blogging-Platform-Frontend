import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";

@Component({

    selector: 'pm-create-blog',

    templateUrl: './create-blog.component.html',

    styleUrls: ['./create-blog.component.css']

})

export class CreateBlogComponent {

    constructor(private blogService: BlogService, private router: Router) { }

    body: any = {

        title: '',

        description: '',

        body: ''
    }

    handlePublish(): void {

        if (!this.body.title || !this.body.description || !this.body.body) {

            alert("Please fill all the required fields")
        } else {
            this.blogService.createBlog(this.body).subscribe({

                next: data => {

                    alert("Your Blog has Published")

                    this.router.navigate(['/'])

                    console.log('create data call: ', data)
                },
                error: err => {

                    if (err.status === 400) {

                        alert(`${err.statusText}`)

                    }
                    console.log('err create blog: ', err)
                }
            })
            // console.log(this.title, this.description, this.body)
        }
    }

}