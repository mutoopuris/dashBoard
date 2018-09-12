import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { DashComponent } from './dashboard.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { AddValue } from './products/addValue.pipe';
import { ProductFilter } from './products/productFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DashComponent,
    MyUpperPipe,
    AddValue,
    ProductFilter

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
