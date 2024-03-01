import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'utib-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit, OnChanges {

  @Input() offset: number = 0;
  @Input() activeData: Array<number> = [0, 0];
  @Input() titleImage: string = '';
  @Input() isSmallImg: boolean = false;
  isApply: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.offset >= this.activeData[0] && this.offset <= this.activeData[1]) {
      this.isApply = true;
    } else {
      this.isApply = false;
    }
  }

}
