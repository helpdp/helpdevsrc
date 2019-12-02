import {
    NgModule
} from '@angular/core';
import {
    HomeComponent,
    HomeService,
} from '.';
import {
    MCUIModule
  } from 'mc-ui-angular';
import {
    HomeRoutingModule
} from './home-routing.module';
import { HomeLeftMenuComponent } from './home-left-menu/home-left-menu.component';
import { EngComponent } from './eng/eng.component';

@NgModule({
    imports: [MCUIModule, HomeRoutingModule],
    declarations: [
        HomeComponent,
        HomeLeftMenuComponent,
        EngComponent
    ],
    entryComponents: [
    ],
    providers: [
        HomeService,
    ]
})
export class HomeModule {}
