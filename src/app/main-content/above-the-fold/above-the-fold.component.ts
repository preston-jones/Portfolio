import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HostListener } from "@angular/core";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss', './above-the-fold.responsive.scss', '../../../styles.animations.scss', '../../../styles.wcag.scss']
})


export class AboveTheFoldComponent {

  currentLang: string;
  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('preferredLanguage');
    this.currentLang = savedLang || 'de';
    this.translate.use(this.currentLang);

    this.getScreenSize();
  }

}
