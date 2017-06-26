import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SectionTitleComponent} from './section-title/section-title.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [HeaderComponent, SectionTitleComponent],
  declarations: [HeaderComponent, SectionTitleComponent]
})
export class SharedModule {
}
