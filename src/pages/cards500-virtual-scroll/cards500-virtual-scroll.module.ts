import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cards500VirtualScrollPage } from './cards500-virtual-scroll';

@NgModule({
  declarations: [
    Cards500VirtualScrollPage,
  ],
  imports: [
    IonicPageModule.forChild(Cards500VirtualScrollPage),
  ],
})
export class Cards500VirtualScrollPageModule {}
