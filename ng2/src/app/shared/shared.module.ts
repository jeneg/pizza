import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SectionTitleComponent} from './section-title/section-title.component';
import {HttpModule} from '@angular/http';
import { ButtonComponent } from './button/button.component';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SectionTitleComponent,
    ButtonComponent,
    CartTotalComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    SectionTitleComponent,
    ButtonComponent,
    CartTotalComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
