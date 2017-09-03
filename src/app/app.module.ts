import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RibbonSectionComponent } from './ribbon-section.component';
import { RibbonTabComponent } from './ribbon-tab.component';
import { MdTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RibbonSectionComponent,
    RibbonTabComponent,
    //MdTabsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdTabsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,]
})
export class AppModule { }
