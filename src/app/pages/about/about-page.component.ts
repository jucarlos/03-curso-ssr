import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent { }
