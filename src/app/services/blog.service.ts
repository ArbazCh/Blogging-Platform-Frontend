import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiUrl } from "src/app/helper/helper";


@Injectable({
    providedIn: 'root'
})

export class BlogService {

    constructor(private http: HttpClient) { }

    getBlogs():Observable<any>{
        return this.http.get(apiUrl+'blog/all')
    }

    getAllBlogs(): Observable<any> {
        return this.http.get(apiUrl + 'blog')
    }

    getBlogBYId(id: number): Observable<any> {

        return this.http.get(apiUrl + `blog/${id}` )
    }

    createBlog(body: any): Observable<any> {

        return this.http.post(apiUrl + 'blog/', body )
    }

    deleteBlog(id: number): Observable<any> {
        
        return this.http.delete(apiUrl + `blog/${id}`)
    }

    addComment(id:number, content:string):Observable<any>{
        // console.log("body: ", body)
        return this.http.post(apiUrl+ `comment/${id}`, {content})
    }

}