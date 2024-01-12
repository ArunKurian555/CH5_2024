import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-sub1',
  standalone: true,
  imports: [],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Sub1Component {

}
