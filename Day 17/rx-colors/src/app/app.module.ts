import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorBoxComponent } from './components/color-box/color-box.component';
import { RandomColorComponent } from './components/random-color/random-color.component';
import { ColorEditorComponent } from './components/color-editor/color-editor.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent,
    RandomColorComponent,
    ColorEditorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
