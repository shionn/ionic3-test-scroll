import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { News200Page } from './news200';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    News200Page,
  ],
  imports: [
    IonicPageModule.forChild(News200Page),
    ComponentsModule,
  ],
})
export class News200PageModule {}
