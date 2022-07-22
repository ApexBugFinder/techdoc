import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromMenu from '../state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChapterContent } from 'src/app/chapter-content/models/chapterContent';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

@Input() chapterList: any;

  constructor(private router: Router, private menuStore: Store<fromMenu.State>) {

  }

  ngOnInit(): void {
    console.log(this.chapterList);
  }


}
