import { NgModule } from '@angular/core';
import { CatNewsComponent } from './cat-news/cat-news';
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [CatNewsComponent],
	imports: [IonicPageModule.forChild(CatNewsComponent)],
	exports: [CatNewsComponent]
})
export class ComponentsModule {}
