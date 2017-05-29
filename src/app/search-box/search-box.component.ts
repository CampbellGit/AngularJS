import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input('placeholder')
  text: string = "Type here";
  constructor() { }
  clear(input){
  console.log('Input cleared: ' +input.value);
  input.value = "";

}

  ngOnInit() {
  }

}
