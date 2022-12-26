import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutesModule } from './auth.routes.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, ReactiveFormsModule, AuthRoutesModule],
  exports: [LoginComponent],
})
export class AuthModule {}
