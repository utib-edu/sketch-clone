import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-fiveth-section',
  templateUrl: './fiveth-section.component.html',
  styleUrls: ['./fiveth-section.component.scss']
})
export class FivethSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 5300 && this.offset <= 9600) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }
}
