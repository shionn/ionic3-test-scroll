import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsInfiniScrollPage } from './cards-infini-scroll';

@NgModule({
  declarations: [
    CardsInfiniScrollPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsInfiniScrollPage),
  ],
})
export class CardsInfiniScrollPageModule {}
