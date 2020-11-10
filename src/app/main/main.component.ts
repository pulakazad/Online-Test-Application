import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  buttonFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.buttonFlag = true;
  }

  hideButton() {
    this.buttonFlag = false;
  }
}
