import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './card/login/login.component';
import { CreateNewComponent } from './card/create-new/create-new.component';
import { RegistrationComponent } from './card/registration/registration.component';
import { SearchService } from './search/search.service';

import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ErrorComponent,
    LoginComponent,
    CreateNewComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutesModule, ReactiveFormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
