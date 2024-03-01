import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  isApply: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= 700 && this.offset <= 2300) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
