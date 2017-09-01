import { Component, Input } from '@angular/core';
import { RibbonTab } from './tab';

@Component({
  selector: 'ribbon-tab',
  templateUrl: './ribbon-tab.component.html',
  styleUrls: ['./ribbon-tab.component.css'],
})
export class RibbonTabComponent {
  @Input() tab: RibbonTab;
}
