import {
  Component,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import {
  AppBaseComponent
} from '../../index';
import { MCUIService, PopupComponent, DrawerComponent, ScrollData } from 'mc-ui-angular';
import {
  HomeService
} from '../home.service';

@Component({
  selector: 'mc-example',
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html'
})
export class ExampleComponent extends AppBaseComponent {

  data = [{
    id: '../../../assets/mp3/JWT.mp3',
    name: 'JWT',
    date: '12/01/2019'
  },
  {
    id: '../../../assets/mp3/TheStateOfJavascriptIn2019.mp3',
    name: 'The State of Javascript in 2019',
    date: '12/08/2019'
  }];

  constructor(
    protected er: ViewContainerRef,
    protected service: MCUIService
  ) {
    super(er, service);
  }

}
