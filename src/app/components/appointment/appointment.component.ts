import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { Tile } from 'src/app/interfaces/Tile';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public tiles: Tile[];
  public values: string[];
  constructor() { }

  ngOnInit() {
  }

  public addTile(fullName: string) {
    let initials = '';
    const names = fullName.split(' ');
    for (const name of names) {
      initials = initials + name.charAt(0);
    }
    this.tiles[this.tiles.length - 1] = { name: fullName, initials: initials };
  }
}
