import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.scss']
})
export class FourthSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 3100 && this.offset <= 5700) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
