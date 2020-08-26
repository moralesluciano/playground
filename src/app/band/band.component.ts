import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Band } from './band';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  @Input() band: Band;
  @Output() favorited = new EventEmitter<boolean>();

  favorite: boolean;

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.favorite = !this.favorite;
    this.favorited.emit(this.favorite);
  }
}
