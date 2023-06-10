import { ChangeDetectionStrategy, Component, DoCheck, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
// import { getToken } from "src/app/helper/helper";
import { AuthService } from "src/app/services/auth.service";
// import { accessToken } from "src/app/helper/helper";

@Component({

    selector: 'pm-header',

    templateUrl: './header.component.html',

    styleUrls: ['./header.component.css'],

})

export class HeaderComponent implements OnInit {


    constructor(private router: Router, private authService:AuthService) { }

    showDropdown:boolean=false;
    private authListenerSubs!: Subscription;  
    isLoggedIn: boolean=false;

      ngOnInit(): void {

        this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

        this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
    
          this.isLoggedIn=isAuthenticated
 
        })
       
      }

      ngOnDestroy():void{
        this.authListenerSubs.unsubscribe()
      }

      toggleDropdown():void{
        this.showDropdown=!this.showDropdown;
      }

      hideDropdown():void{
        this.showDropdown = false;
      }

    signOut(): void {

      this.authService.logout();

        this.router.navigate(['/'])
    }

}



    
    // changeDetection: ChangeDetectionStrategy.OnPush

    // this.isLoggedIn=this.authService.getIsLoggedIn()
    // this.authService.signOut().subscribe(isAuthenticated=>this.isLoggedIn=isAuthenticated)

    // localStorage.removeItem('access-token')

    // this.isLoggedIn=false
    // get isLoggedIn(): boolean{
    //     console.log("getter called")
    //     return !! (localStorage.getItem('access-token')) 
    //   }

    // get isLoggedIn(): boolean {
    //   if (this.isLoggedInCache !== null) {
    //     return this.isLoggedInCache;
    //   }
    
    //   console.log('getter called');
    //   this.isLoggedInCache = !!(localStorage.getItem('access-token'));
    //   return this.isLoggedInCache;
    // }