import {
  Injectable
} from '@angular/core';
import {
  MCUIService
} from 'mc-ui-angular';
import { AppBaseService } from '../app-base.service';

const CONS = {
  homeLeftMenu: {
    data: {
      menu: [
        { id: '/home/eng', name: 'Daily Dev Eng', depth: 0 },
      ]
    }
  }
};

@Injectable()
export class HomeService extends AppBaseService {

  constructor(
      protected service: MCUIService
  ) {
      super(service);
  }

  getMenuList() {
    return CONS.homeLeftMenu.data.menu;
  }

}
