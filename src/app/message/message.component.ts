import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Output()
    newEmitter= new EventEmitter<string>();
    value: any;


  send(){
    this.newEmitter.emit(this.value);
  }

}
