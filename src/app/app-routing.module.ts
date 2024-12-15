import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { getUserResolver } from './shared/resolver/getUser.resolver';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { CocktailFormComponent } from './cocktails-container/cocktail-form/cocktail-form.component';
import { CocktailDetailsComponent } from './cocktails-container/cocktail-details/cocktail-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CocktailsContainerComponent,
    children: [
      {
        path: 'new',
        component: CocktailFormComponent,
      },
      {
        path: ':index/edit',
        component: CocktailFormComponent,
      },
      {
        path: ':index',
        component: CocktailDetailsComponent,
      },
      {
        path: '',
        redirectTo: '0',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'panier',
    component: PanierContainerComponent,
  },
  {
    path: 'list',
    component: PageListComponent,
  },
  {
    path: 'details',
    component: PageDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
