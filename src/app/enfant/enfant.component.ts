import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as stream from "stream";
import * as net from "net";

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})

export class EnfantComponent {
  @Input() valeurTexteParent:string =""
  @Output() txtRequest = new EventEmitter<string>();

  messageEnfant:string=""

  VersParent(){
    this.txtRequest.emit(this.messageEnfant)
  }
}
