import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

import { AppRoutesModule } from './app-routes.module';
import { CardsModule } from './card/card.module';
import { SearchModule } from './search/search.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    CardsModule,
    SearchModule,
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
