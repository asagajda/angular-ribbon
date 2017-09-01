import { Component, Input } from '@angular/core';
import { RibbonSection } from './section';

@Component({
  selector: 'ribbon-section',
  templateUrl: './ribbon-section.component.html',
  styleUrls: ['./ribbon-section.component.css'],
})
export class RibbonSectionComponent {
  @Input() section: RibbonSection;
}
