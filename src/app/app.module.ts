import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { routes } from './routes/route';

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { MYBlogsComponent } from './components/my-blogs/my-blogs.component';
import { BlogPageComponent } from './components/blogPage/blog-page.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotifyComponent } from './components/notify/notify.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MYBlogsComponent,
    BlogPageComponent,
    CreateBlogComponent,
    UserProfileComponent,
    NotifyComponent,
    HomeComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatPaginatorModule,
    ReactiveFormsModule,
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
