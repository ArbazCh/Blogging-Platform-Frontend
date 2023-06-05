import { Component, Input, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { IBlog } from "./blog";
import { Router } from "@angular/router";
// import { getHttpOptions } from "src/app/helper/helper";

@Component({

    selector: 'pm-blogs',

    templateUrl: './my-blogs.component.html',

    styleUrls: ['./my-blogs.component.css']
})
export class MYBlogsComponent implements OnInit {

    constructor(private blogService: BlogService, private router: Router) { }

    blogs: IBlog[] = [];

    filteredBlogs: IBlog[] = [];

    ngOnInit(): void {

        this.blogService.getAllBlogs().subscribe({

            next: data => {

                this.blogs = data;

                this.filteredBlogs = this.blogs
            },
            error: err => console.log('blog error: ', err)
        });
    }

}

    // searchTerm: string = '';

    // pageSize: number = 5;

    // currentPage: number = 1;

    // noResultsFound: boolean = false

    // onPageChange(pageNumber: number): void {

    //     this.currentPage = pageNumber;
    // }

    // searchBlog(): void {

    //     this.filteredBlogs = this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()));

    //     this.currentPage = 1;

    //     this.noResultsFound = this.filteredBlogs.length === 0
    // }