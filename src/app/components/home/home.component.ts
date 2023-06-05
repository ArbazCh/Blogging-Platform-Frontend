import { Component, OnInit } from "@angular/core";
import { BlogService } from "src/app/services/blog.service";
import { IBlog } from "../my-blogs/blog";



@Component({
    selector:'pm-home',
    templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit{

    constructor(private blogService:BlogService){}

    allBlogs:IBlog[]=[];
    filteredBlogs:IBlog[]=[];

    ngOnInit(): void {
        
        this.blogService.getBlogs().subscribe({
            next:data=>{
                this.allBlogs=data
                this.filteredBlogs=data
                // console.log("all blogs data: ", data)
            },
            error:err=>console.log("all blog: ", err)
        })
        
    }

}