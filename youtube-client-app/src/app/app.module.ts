import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutesModule } from './app-routes.module';
import { CardsModule } from './card/card.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CardsModule, AppRoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
