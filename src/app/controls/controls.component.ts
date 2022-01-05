import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Output() onSubmitCommands = new EventEmitter();
  @Output() onRandomize = new EventEmitter();
  @Output() onReset = new EventEmitter();
  commands: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleClick(value: string) {
    this.commands.push(value);
  }

  submitCommands() {
    this.onSubmitCommands.emit(this.commands);
    this.commands = [];
  }
}
