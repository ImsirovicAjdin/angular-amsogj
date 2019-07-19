import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <app-customer></app-customer>
    </div>
  `
})
export class AppComponent  {
  title = "Demo";
}
