import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';
import { TextboxComponent } from './textbox/textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   TextboxComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
