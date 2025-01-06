import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styles: [
    `
      .card-cancel-button {
          font-size: 16px;
          color: white;
          text-align: center;
          margin-top: 10px;
          padding: 10px;
          font-weight: bold;
          border-radius: 25px;
          background-color: blue;
      }
    `
  ]
})
export class CardButtonCancelComponent {

}
