import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-eighth-section',
  templateUrl: './eighth-section.component.html',
  styleUrls: ['./eighth-section.component.scss']
})
export class EighthSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 12000) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
