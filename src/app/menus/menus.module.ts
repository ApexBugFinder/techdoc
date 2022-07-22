import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StoreModule} from '@ngrx/store';
import { menuReducer } from './state/menu-reducer';



@NgModule({
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    StoreModule.forFeature('menus', menuReducer)


  ],
  exports: [
    TopMenuComponent,
    SideMenuComponent
  ]
})
export class MenusModule { }
