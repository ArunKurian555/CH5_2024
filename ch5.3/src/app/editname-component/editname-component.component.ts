import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditorpageComponent } from '../editorpage/editorpage.component';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
declare var CrComLib: any;
@Component({
  selector: 'app-editname-component',
  standalone: true,
  imports: [MatButtonModule,ScrollingModule],
  templateUrl: './editname-component.component.html',
  styleUrl: './editname-component.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditnameComponentComponent implements OnInit {
  constructor(public dialog: MatDialog)
  {
    
  }
  activezonelabel = [];
  temp: number;
  value: string;
  numvalue: number;
  activeZones: number[];

  ngOnInit(): void {
    let self = this; //this statement binds the object that you want to self;

    /////////////// Active Zones
    const sig1SubKey = CrComLib.subscribeState('s', '1', function (value) {
      self.value = value;
      let items = [];
      for (let i = 0; i < self.value.length; i++) {
        if (self.value[i] === "1") {
          items.push(i + 1);
        }
      }
      self.activeZones = items;

    });



    ////////////////////////// Zone names

    for (let i = 0; i < 251; i++) {
      self.activezonelabel.push("NIL");
     }
    const numberOfZones = 250;

    for (let i = 1; i <= numberOfZones; i++) {
    const zoneSubKey = CrComLib.subscribeState('s', `Zones.Zone${i - 1}`, (value) => {
        self.activezonelabel[i] = value;
    });
}
  }


  editname2(id: number) {
    const dialogRef = this.dialog.open(EditorpageComponent, {
    });
    let temp = id.toString();
    let temp2 = "Zonerename.Zoneflag" + temp;
    CrComLib.publishEvent('b', temp2, true);
    CrComLib.publishEvent('b', temp2, false);
  }



  editname1() {
    const dialogRef = this.dialog.open(EditorpageComponent, {
    });
  }

}
