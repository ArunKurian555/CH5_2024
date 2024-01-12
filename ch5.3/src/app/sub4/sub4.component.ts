import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorChromeModule } from 'ngx-color/chrome';
import { ColorSketchModule } from 'ngx-color/sketch';

declare var CrComLib: any;

@Component({
  selector: 'app-sub4',
  standalone: true,
  imports: [ColorChromeModule , ColorSketchModule],
  templateUrl: './sub4.component.html',
  styleUrl: './sub4.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sub4Component implements OnInit {
  constructor() { }

  a = true;
  ngOnInit(): void {
  }



  handleChange($event: ColorEvent) {
    CrComLib.publishEvent('n', '251', $event.color.rgb.r);
    CrComLib.publishEvent('n', '252', $event.color.rgb.g);
    CrComLib.publishEvent('n', '253', $event.color.rgb.b);
  }


}
