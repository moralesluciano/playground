import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Band } from '../band/band';
import { BandService } from '../band/band.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss'],
})
export class BandDetailComponent implements OnInit {
  band: Band = {} as Band;

  constructor(private route: ActivatedRoute, private bandService: BandService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async p => {
      try {
        this.band = await this.bandService.getById(parseInt(p.get('id'), 10));
      } catch (error) {
        console.log(error);
      }
    });
  }
}
