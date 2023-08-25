import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'my_app';
  input1: string = "";
  input2: string = "";
  result: string = "";

  public addme() {
    this.result = String(Number(this.input1) + Number(this.input2));
  }
  // onKey(event: any) {
  //   console.log(event.target.value)
}

