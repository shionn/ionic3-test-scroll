import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { News500Page } from './news500';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    News500Page,
  ],
  imports: [
    IonicPageModule.forChild(News500Page),
    ComponentsModule,
  ],
})
export class News500PageModule {}
