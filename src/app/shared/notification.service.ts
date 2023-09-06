import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private notification$: Subject<NotificationData> =  new Subject;

  get notifications(){
    return this.notification$.asObservable()
  }

  showText(text:string, duration = 1000){
    this.notification$.next({text, duration})
  }
  
  constructor() { }

 
}
