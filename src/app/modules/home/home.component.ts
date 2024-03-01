import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'utib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollOffset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
