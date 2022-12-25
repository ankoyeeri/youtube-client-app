import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardRoutesModule } from './card-routes.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [CreateNewComponent, RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, CardRoutesModule],
  exports: [CreateNewComponent, RegistrationComponent],
})
export class CardsModule {}
