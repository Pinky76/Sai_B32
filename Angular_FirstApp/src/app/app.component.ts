import { Component, TemplateRef } from '@angular/core';

// selector is html reference to the component in inex.html
// @ means decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles :
  // TemplateRef

})
export class AppComponent {
  title = 'Angular_FirstApp';
}
