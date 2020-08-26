import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandDetailComponent } from './band-detail/band-detail.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { BandListComponent } from './band-list/band-list.component';

const routes: Routes = [
  { path: '', component: BandListComponent },
  {
    path: 'bands/:id/details',
    component: BandDetailComponent,
  },
  {
    path: 'bands/:id/edit',
    component: BandEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
