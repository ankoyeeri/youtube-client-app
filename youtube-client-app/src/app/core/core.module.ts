import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { HeaderModule } from './components/header/header.module';
import { ApiKeyInterceptorService } from './services/api-key-interceptor.service';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, HeaderModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptorService,
      multi: true,
    },
  ],
  exports: [HeaderModule, ErrorComponent],
})
export class CoreModule {}
