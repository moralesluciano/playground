import { Component, OnInit } from '@angular/core';

import { Band } from '../band/band';
import { BandService } from '../band/band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  title = 'music-app';
  favorites = 0;
  bands: Band[];

  constructor(private bandService: BandService) {}

  ngOnInit() {
    this.bandService.get().subscribe(
      r => (this.bands = r),
      error => console.log(error),
    );
  }

  favorited(value: boolean) {
    value ? this.favorites++ : this.favorites--;
  }
}
