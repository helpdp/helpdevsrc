import {
  Component,
  ViewContainerRef
} from '@angular/core';
import {
  AppBaseComponent
} from '../../index';
import { MCUIService } from 'mc-ui-angular';

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
  },
  {
    id: '../../../assets/mp3/BehavioralInterviewStar.mp3',
    name: 'Behavioral Interview STAR',
    date: '12/18/2019'
  },
  {
    id: '../../../assets/mp3/BigO.mp3',
    name: 'Big O',
    date: '01/04/2020'
    },
    {
      id: '../../../assets/mp3/EventLoopAndWebWorkers.mp3',
      name: 'Javascript Event loop and Web Workers',
      date: '01/26/2020'
    },
    {
      id: '../../../assets/mp3/CSS_Specificity.mp3',
      name: 'CSS Specificity',
      date: '02/02/2020'
    }];

  constructor(
    protected er: ViewContainerRef,
    protected service: MCUIService
  ) {
    super(er, service);
  }

}
