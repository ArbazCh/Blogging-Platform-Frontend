import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { apiUrl, httpOptions } from "src/app/helper/helper";


@Injectable({
    providedIn: 'root'
})

export class BlogService {

    constructor(private http: HttpClient) { }

    getAllBlogs(): Observable<any> {

        return this.http.get(apiUrl + 'blog', httpOptions)
    }

    getBlogBYId(id: number): Observable<any> {

        return this.http.get(apiUrl + `blog/${id}`, httpOptions)
    }

    createBlog(body: any): Observable<any> {

        return this.http.post(apiUrl + 'blog/', body, httpOptions)
    }

    deleteBlog(id: number): Observable<any> {

        return this.http.delete(apiUrl + `blog/${id}`, httpOptions)
    }

}