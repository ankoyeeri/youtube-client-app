import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewComponent } from './card/create-new/create-new.component';
import { LoginComponent } from './card/login/login.component';
import { RegistrationComponent } from './card/registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { SearchItemDetailsComponent } from './search/search-item-details/search-item-details.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const appRoutes: Routes = [
  { path: 'results', component: SearchResultsComponent },
  { path: 'results/:id', component: SearchItemDetailsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
