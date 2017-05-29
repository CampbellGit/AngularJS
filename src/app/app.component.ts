import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  philippe = 'Josie ! Reviens !';


  onColor(color) {
    console.log(`couleur : ` + color);
  }
    
//  reset(color) {
//    color.value = "";
//  }
}
