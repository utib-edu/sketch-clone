import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'utib-wave-common',
  templateUrl: './wave-common.component.html',
  styleUrls: ['./wave-common.component.scss']
})
export class WaveCommonComponent implements OnInit {

  @Input() hideTop: boolean = false;
  @Input() hideBottom: boolean = false;
  @Input() isFooter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
