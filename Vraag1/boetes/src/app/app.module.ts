import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoeteComponentComponent } from './boete-component/boete-component.component';
import { ReadingJsonFileComponent } from './reading-json-file/reading-json-file.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BoeteComponentComponent, ReadingJsonFileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
