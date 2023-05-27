import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { BlogsComponent } from "../components/blogs/blogs.component";
import { BlogPageComponent } from "../components/blogPage/blog-page.component";
import { CreateBlogComponent } from "../components/create-blog/create-blog.component";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";
import { AuthGuard } from "../auth.guard";

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blogs', canActivate: [AuthGuard], component: BlogsComponent },
    { path: 'blog/:id', canActivate: [AuthGuard], component: BlogPageComponent },
    { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },
    { path: 'user', canActivate: [AuthGuard], component: UserProfileComponent }
]