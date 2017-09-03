import { Component } from '@angular/core';
import { RibbonSection } from "./section";
import { RibbonTab } from "./tab";
import { RibbonButton } from "./button"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabs = tabs;
}


const section1: RibbonSection = {
  id: 0,
  name: "sec1",
  buttons: [
    {id:1, name: "button1"},
    {id:2, name: "button2"},
    {id:3, name: "button3"},
  ]
}

const section2: RibbonSection = {
  id: 1,
  name: "sec2",
  buttons: [
    {id:1, name: "butt1"},
    {id:2, name: "butt2"},
    {id:3, name: "butt3"},
  ]
}


const tab1: RibbonTab =
{
  id: 1,
  name: "Formatting",
  sections: [section1, section2],
}

const tabs: RibbonTab[] = [tab1]
