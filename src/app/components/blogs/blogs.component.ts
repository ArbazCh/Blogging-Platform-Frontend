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

    filteredBlogs: IBlog[] = [];

    searchTerm: string = '';

    pageSize: number = 5;

    currentPage: number = 1;

    noResultsFound: boolean = false


    ngOnInit(): void {

        this.blogService.getAllBlogs().subscribe({

            next: data => {

                this.blogs = data;

                this.filteredBlogs = this.blogs;

                console.log('blog call: ', this.blogs)

            },

            error: err => console.log('blog error: ', err)
        });
    }

    onPageChange(pageNumber: number): void {

        this.currentPage = pageNumber;
    }

    searchBlog(): void {

        this.filteredBlogs = this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()));

        // console.log("filter length: ", this.filteredBlogs)

        this.currentPage = 1;

        this.noResultsFound = this.filteredBlogs.length === 0
    }

}