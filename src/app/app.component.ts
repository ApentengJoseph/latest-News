import { Component } from '@angular/core';
import { NotifierService } from './notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'latestNews';

  constructor(private notify: NotifierService){  }
  
}
