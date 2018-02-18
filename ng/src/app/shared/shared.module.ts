import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SectionTitleComponent} from './section-title/section-title.component';
import {HttpModule} from '@angular/http';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { HeaderEffectsDirective } from './header/header-effects.directive';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SectionTitleComponent,
    CartTotalComponent,
    FooterComponent,
    HeaderEffectsDirective,
    QuantitySelectorComponent
  ],
  declarations: [
    HeaderComponent,
    SectionTitleComponent,
    CartTotalComponent,
    FooterComponent,
    HeaderEffectsDirective,
    QuantitySelectorComponent
  ]
})
export class SharedModule {
}
