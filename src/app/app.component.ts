import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "texto inicial";
  inputType = "text";
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disabledInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = "password";
  }

  setTextTypeInput() {
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText); 
  }
}
