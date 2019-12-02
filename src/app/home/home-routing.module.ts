import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  HomeComponent,
} from '.';
import { EngComponent } from './eng/eng.component';

const homeRoutes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: 'eng',
      component: EngComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
