import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'search', component: SearchCriteriaComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: '', redirectTo: '/recipe-list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
