import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input()
  color: string;

  @Output("color")
  colorOutput = new EventEmitter();

  choose(color: string) {
    this.color = color;
    this.colorOutput.emit(color);
    console.log(color);
  }

//  onColor(color) {
//    console.log(`couleur : ` + color);
//  }
  reset() {
    this.choose("");
  }

  constructor() { }

  ngOnInit() {
  }

}
