import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandComponent } from './band/band.component';
import { FavoritedDirective } from './favorited/favorited.directive';
import { PreviewPipe } from './preview/preview.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BandComponent,
    BandDetailComponent,
    BandListComponent,
    BandEditComponent,
    FavoritedDirective,
    PreviewPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
