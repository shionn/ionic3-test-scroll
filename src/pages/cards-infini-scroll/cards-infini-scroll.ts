import { Component } from '@angular/core';
import {InfiniteScroll, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CardsInfiniScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards-infini-scroll',
  templateUrl: 'cards-infini-scroll.html',
})
export class CardsInfiniScrollPage {

  public cards: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0;i<50;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
  }

  public doInfinite(event:InfiniteScroll) {
    let size = this.cards.length;
    for(let i=size;i<size+20;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
    event.complete();
  }
}
