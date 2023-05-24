import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiUrl, httpOptions } from "src/app/helper/helper";


@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http: HttpClient) { }

    getAllBlogs(): Observable<any> {
        return this.http.get(apiUrl + 'blog', httpOptions)
    }

}