import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  

  title = 'my_app';
  username = "Hello"
  newuser = "Kundan"
 
  lgbtnclick(event: any){
    
    alert(this.username)
    console.log(this.username)
    console.log(event.target.value)
 }
 onKey(event: any) {
  // throw new Error('Method not implemented.');
  console.log(event.target.value)
  }

  clearValue(){
    this.newuser = ""
  }


}
