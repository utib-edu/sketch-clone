import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'utib-seventh-section',
  templateUrl: './seventh-section.component.html',
  styleUrls: ['./seventh-section.component.scss']
})
export class SeventhSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 11000) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }


}
