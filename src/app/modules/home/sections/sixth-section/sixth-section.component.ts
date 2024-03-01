import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-sixth-section',
  templateUrl: './sixth-section.component.html',
  styleUrls: ['./sixth-section.component.scss']
})
export class SixthSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 9200 && this.offset <= 11500) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
