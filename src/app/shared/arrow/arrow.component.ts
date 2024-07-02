import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss',
})
export class ArrowComponent {

  @Input() arrowImgSrc: any;
  imgSrc?: string;


  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.arrowImgSrc;
    console.log(this.imgSrc);
  }

  // arrowLeftAnimation() {

  // }


  // arrowRightAnimation() {

  // }

}
