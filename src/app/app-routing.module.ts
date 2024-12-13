import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { getUserResolver } from './shared/resolver/getUser.resolver';
import { PanierContainerComponent } from './panier-container/panier-container.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailsContainerComponent,
  },
  {
    path: 'cocktails',
    component: CocktailsContainerComponent,
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
    path: 'list/:id',
    component: PageDetailsComponent,
    resolve: {
      getUserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
