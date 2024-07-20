import { Component, Input, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss',
})
export class ArrowComponent implements AfterViewInit  {

  @Input() arrowImgSrc: any;
  imgSrc?: string;
  mouseEnter: boolean = false;


  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.arrowImgSrc;
    console.log(this.imgSrc);
  }

  ngAfterViewInit() {
    AOS.init();
  }


  onMouseEnter() {
    this.mouseEnter = true;
    console.log(this.mouseEnter);
  }

  
  onMouseLeave() {
    this.mouseEnter = false;
    console.log(this.mouseEnter);
  }

}
