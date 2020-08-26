import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Band } from '../band/band';
import { BandService } from '../band/band.service';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.scss'],
})
export class BandEditComponent implements OnInit {
  band: Band = {} as Band;
  albumForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.albumForm = this.formBuilder.group({
      albums: this.formBuilder.array([]),
    });

    this.route.paramMap.subscribe(async p => {
      try {
        this.band = await this.bandService.getById(parseInt(p.get('id'), 10));

        const albumsControl = this.albumForm.controls.albums as FormArray;
        this.band.albums.forEach(album => {
          albumsControl.push(this.formBuilder.control(album, [Validators.required]));
        });
      } catch (error) {
        console.log(error);
      }
    });
  }

  addAlbum() {
    const albumsControl = this.albumForm.controls.albums as FormArray;
    albumsControl.push(this.formBuilder.control('', [Validators.required]));
  }

  saveInfo(control) {
    console.log(control.form.value);
  }

  saveAlbums() {
    console.log(this.albumForm.value);
  }
}
