import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DramaComponent} from './drama/drama.component';
import {GenreComponent} from './genre/genre.component';

const routes: Routes = [
{path:'drama',component:DramaComponent},
{path:'genre',component:GenreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
