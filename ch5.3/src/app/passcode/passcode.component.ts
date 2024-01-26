import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatButtonModule } from '@angular/material/button';

declare var CrComLib: any;

@Component({
  selector: 'app-passcode',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './passcode.component.html',
  styleUrl: './passcode.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PasscodeComponent {

  
  constructor(

    public rout: ChRouteServiceService,


  ) { }
  ngOnInit(): void {// Javascript is used to set the clock to your computer time.
  }
  
  click1()
  {
  CrComLib.publishEvent('b', "3072", true);
  CrComLib.publishEvent('b', "3072", false);
  
  }
  
click2()
{
CrComLib.publishEvent('b', "3073", true);
CrComLib.publishEvent('b', "3073", false);

}

}
