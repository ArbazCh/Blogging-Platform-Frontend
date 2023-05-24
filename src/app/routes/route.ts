import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { BlogsComponent } from "../components/blogs/blogs.component";
import { BlogPageComponent } from "../components/blogPage/blog-page.component";

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog/:id', component: BlogPageComponent }
]