import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { MYBlogsComponent } from "../components/my-blogs/my-blogs.component";
import { BlogPageComponent } from "../components/blogPage/blog-page.component";
import { CreateBlogComponent } from "../components/create-blog/create-blog.component";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";
import { AuthGuard } from "../guards/auth.guard";
import { HomeComponent } from "../components/home/home.component";

export const routes: Routes = [

    {path: '', component : HomeComponent },

    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },

    { path: 'blogs', canActivate: [AuthGuard], component: MYBlogsComponent },

    { path: 'blog/:id', component: BlogPageComponent },

    { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },

    { path: 'user', canActivate: [AuthGuard], component: UserProfileComponent }
]
// canActivate: [AuthGuard],