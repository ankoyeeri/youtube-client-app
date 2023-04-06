import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutesModule } from './admin.routes.module';
import { CreateNewComponent } from './pages/create-new/create-new.component';

@NgModule({
  declarations: [CreateNewComponent],
  imports: [SharedModule, ReactiveFormsModule, AdminRoutesModule],
  exports: [CreateNewComponent],
})
export class AdminModule {}
