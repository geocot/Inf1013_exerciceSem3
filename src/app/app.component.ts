import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  variableInputDeParent:string =""
  inputParent:string = ""
  title = 'sem3';
  valeurTexteEnfant:string = ""

  envoyerVenfant(){

    this.variableInputDeParent = this.inputParent
  }

  afficheDeLenfant(message:string){
    this.valeurTexteEnfant = message

  }

}
