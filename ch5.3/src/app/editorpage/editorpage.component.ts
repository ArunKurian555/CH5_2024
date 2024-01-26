import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
declare var CrComLib: any;
@Component({
  selector: 'app-editorpage',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './editorpage.component.html',
  styleUrl: './editorpage.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  tick() {
    CrComLib.publishEvent('b', "3068", true);
    CrComLib.publishEvent('b', "3068", false);


  }

}
