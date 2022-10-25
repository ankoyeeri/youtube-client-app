import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewComponent } from './card/create-new/create-new.component';
import { LoginComponent } from './card/login/login.component';
import { RegistrationComponent } from './card/registration/registration.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const appRoutes: Routes = [
  { path: '', component: CreateNewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'results', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
