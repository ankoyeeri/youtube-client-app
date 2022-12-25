import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/components/error/error.component';

const appRoutes: Routes = [
  { path: 'error', component: ErrorComponent },
  // Commented due to function requirement of task-2:
  /*
      Once a user is entered the app, 
      The only Header component should be shown. 
   */
  // { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
