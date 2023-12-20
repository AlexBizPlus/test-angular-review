// unused module
import { AbstractControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BarComponent } from './bar/bar.component';
import { NgModule } from '@angular/core';
import { BazComponent } from './baz/baz.component';

@NgModule({
  declarations: [AppComponent, FooComponent, BarComponent, BazComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
