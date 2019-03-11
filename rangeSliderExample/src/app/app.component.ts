import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rangeSliderExample';
  startRange1value: number = 367745;
  rangeslideData1 = { range_start: 367745, range_end: 798421 };

  startRange2value: number = 264880;
  rangeslideData2 = { range_start: 264880, range_end: 804880 };
}
