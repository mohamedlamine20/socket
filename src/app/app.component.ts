import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RxStompService} from "./rx-stomp.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private rxStompService: RxStompService,private service:UserService) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    }


  message='';
  messages :string[]=[];
  users=[];
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      this.service.login({
        "email":"mbounab@wissalgroup.com",
        "password":"123"
      }).subscribe(
        res=>localStorage.setItem("token",res.value)
      )
    }
    this.rxStompService.watch('/topic/messages').subscribe((message: any) => {
     this.messages.push(message.body);
    });
  }

  send(message:string){
    this.rxStompService.publish({destination:'/topic/messages',body:message});
  }
  getAll(){
    this.service.getAll().subscribe(
      res=>console.log(res)
    )
  }
}
