import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChapterContent } from 'src/app/chapter-content/models/chapterContent';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})



export class TopMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('topNavBar') topMenu: ElementRef | undefined;

  @Input() chapterList: ChapterContent[] = [];

  constructor() {

  }
  ngAfterViewInit(): void {
    if (this.topMenu != null) {
    this.topMenu.nativeElement.classList.add('hide-nav-bar');
    }
  }

  ngOnInit(): void {
  }


  toggleTopMenu(): void {

    console.log('toggling commencing');
    console.log('top nav bar classes: ', this.topMenu?.nativeElement.classList);
    if (this.topMenu === undefined) {
      console.log('sorry null');
    } else {
      if (this.topMenu.nativeElement.classList.contains('hide-nav-bar')) {
        this.topMenu.nativeElement.classList.remove('hide-nav-bar');
        console.log(this.topMenu.nativeElement.classList);

      } else {
        this.topMenu.nativeElement.classList.add('hide-nav-bar');
        console.log(this.topMenu.nativeElement.classList);
      }
    }
    return;
  }

}
