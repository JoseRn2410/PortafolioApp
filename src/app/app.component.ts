import { Component } from '@angular/core';

declare const Modernizr: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortafolioApp';
  constructor() {
    Modernizr.on('webp', function(result:boolean) {
      if (result) {
        document.documentElement.classList.add('webp');
      } else {
        document.documentElement.classList.add('no-webp');
      }
    });
  }
}