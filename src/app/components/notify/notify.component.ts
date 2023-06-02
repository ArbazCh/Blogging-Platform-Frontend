import { Component, Input, OnInit } from "@angular/core";



@Component({
    selector:'pm-notify',
    templateUrl: './notify.component.html',
    styleUrls:['./notify.component.css']
})
 
export class NotifyComponent implements OnInit{

    @Input() notifyMessage!:string;
    showNotification: boolean = false;

    ngOnInit(): void {
        console.log('message: ', this.notifyMessage)
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
      }

}