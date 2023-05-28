import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { routes } from './routes/route';

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPageComponent } from './components/blogPage/blog-page.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    BlogsComponent,
    BlogPageComponent,
    CreateBlogComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
