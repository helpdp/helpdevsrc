
import {
  Component,
  ViewContainerRef
} from '@angular/core';
import {
  AppBaseComponent
} from '../../index';
import {
  MCUIService
} from 'mc-ui-angular';

@Component({
  selector: 'mc-eng',
  styleUrls: ['eng.component.scss'],
  templateUrl: 'eng.component.html'
})
export class EngComponent extends AppBaseComponent {

  constructor(
      protected er: ViewContainerRef,
      protected service: MCUIService
  ) {
      super(er, service);
  }
}
