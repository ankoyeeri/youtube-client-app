import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [CreateNewComponent, LoginComponent, RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class CardsModule {}
