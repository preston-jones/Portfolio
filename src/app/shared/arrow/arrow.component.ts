import { Component, Input, AfterViewInit, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss', './arrow.responsive.scss'],
})
export class ArrowComponent implements AfterViewInit  {

  @Input() arrowImgSrc: any;
  imgSrc?: string;
  mouseEnter: boolean = false;


  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.arrowImgSrc;
  }

  ngAfterViewInit() {
    AOS.init();
  }


  @HostListener('window:scroll', ['$event'])
  initAos() {
    AOS.init();
  }


  onMouseEnter() {
    this.mouseEnter = true;
  }

  
  onMouseLeave() {
    this.mouseEnter = false;
  }
}
