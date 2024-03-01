import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 1900 && this.offset <= 3800) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
