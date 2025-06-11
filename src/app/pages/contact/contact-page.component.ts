import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent { }
