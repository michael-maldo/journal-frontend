import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'journal';

  constructor() {
    const isStandalone = (AppComponent as any).ɵcmp?.standalone ?? false;
    console.log('Is AppComponent standalone?', isStandalone);
  }

}
