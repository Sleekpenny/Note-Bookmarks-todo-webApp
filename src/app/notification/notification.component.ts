import { Component,OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationData } from '../shared/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger("notificationAmine",[
      transition(":enter",[
        style ({
          display: "block",
          opacity: 0,
          transform:"translateY(5px)"
        }),
        animate("350ms 125ms")
      ]),
      transition(":leave",[
        animate(350, style({
          opacity: 0,
          transform:"translateY(-5px)"
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  constructor(private notificationServie:NotificationService){}

  notifications:NotificationData[] | any
  timeout: any

  ngOnInit(): void {
    this.notificationServie.notifications.subscribe((notification:NotificationData)=>{
      this.notifications = Array(notification)

      clearTimeout(this.timeout)

      this.timeout =  setTimeout(()=>{
        this.notifications = null
      }, notification.duration)
    })
  }

}
