import { Component, Input, OnInit } from "@angular/core";
import { IBlog } from "../my-blogs/blog";



@Component({
    selector:'pm-blog-list',
    templateUrl:'./blog-list.component.html',
    styleUrls:['./blog-list.component.css']
})

export class BlogListComponent{

    @Input() blogs:IBlog[]= [];

    @Input() filteredBlogs: IBlog[] =[];

    searchTerm: string = '';

    pageSize: number = 9;

    currentPage: number = 1;

    noResultsFound: boolean = false


    onPageChange(pageNumber: number): void {

        this.currentPage = pageNumber;
    }

    searchBlog(): void {

        this.filteredBlogs = this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()));

        this.currentPage = 1;

        this.noResultsFound = this.filteredBlogs.length === 0
    }



}