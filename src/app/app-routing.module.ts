import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AuthGuard } from './authGuard';
import { DataResolver } from './data.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'contact/:contactId',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
