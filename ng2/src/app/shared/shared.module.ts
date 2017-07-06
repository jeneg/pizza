import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SectionTitleComponent} from './section-title/section-title.component';
import {HttpModule} from '@angular/http';
import { ButtonComponent } from './button/button.component';
import { CartTotalComponent } from './cart-total/cart-total.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    HeaderComponent,
    SectionTitleComponent,
    ButtonComponent,
    CartTotalComponent
  ],
  declarations: [
    HeaderComponent,
    SectionTitleComponent,
    ButtonComponent,
    CartTotalComponent
  ]
})
export class SharedModule {
}
