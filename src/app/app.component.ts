import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet, UrlSegment } from '@angular/router';
import { timer } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations',[
      transition('*=>*',[
       style({
        position: "relative",
        overflow: "hidden"
       }),
       query(":enter, :leave", [
        style({
          position: "absolute",
          top:0,
          left: 0,
          width : "100%",
          height: "100%",
          opacity: 0,
        })
       ], {optional:true}),

       group([
        query(":leave", [
          animate("500ms ease-in", style({
            opacity:0,
            top:0,
            left: 0,
            transform: "translateX(-80px)"
          }))
        ], {optional:true}),

        query(":enter",[
          style({
            transform: "translateX(80px)",
            opacity: 0,
            top:0,
            left: 0,
          }),
          animate("500ms", style({
            opacity: 1,
            top:0,
            left: 0,
            transform:"translateX(0)"
          }))
        ],{optional:true})
       ])
      ])
    ]),
    trigger("swapBgFadeIn", [
      transition(":leave", [
        animate("1000ms", style({
          opacity: 0
        }))
      ])
    ])
  ] 
})
export class AppComponent implements OnInit{
  bg:string ;
  loadingImage:boolean
  dateTime:Date

  
  preparedRoute(outlet:RouterOutlet){
    return outlet.activatedRouteData["tabs"]
  }

  ngOnInit(): void {    
    timer(0, 1000).subscribe(()=>{
      this.dateTime = new Date()
    })    
  }
  
  async changeBG(){
    const result = await fetch("https://source.unsplash.com/random/1920x1080", 
    {method: "HEAD"})

    if(result.url == this.bg) return this.changeBG()
    this.bg = result.url;

    this.loadingImage = true
  }

  onLoadingBgImage(){
    this.loadingImage = false
  }
}
