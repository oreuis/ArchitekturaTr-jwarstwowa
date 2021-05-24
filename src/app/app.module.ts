import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { ShowGenreComponent } from './genre/show-genre/show-genre.component';
import { AddEditComponent } from './genre/add-edit/add-edit.component';
import { DramaComponent } from './drama/drama.component';
import { ShowDramaComponent } from './drama/show-drama/show-drama.component';
import { AddEditDramaComponent } from './drama/add-edit-drama/add-edit-drama.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    ShowGenreComponent,
    AddEditComponent,
    DramaComponent,
    ShowDramaComponent,
    AddEditDramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
