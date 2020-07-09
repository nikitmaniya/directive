import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  check=true; // structural Directive

  btnclick(){ // Components directive
    alert("You click me");// Components directive
  }

 
}
