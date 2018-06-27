import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Cards500VirtualScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards500-virtual-scroll',
  templateUrl: 'cards500-virtual-scroll.html',
})
export class Cards500VirtualScrollPage {

  public cards: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0;i<500;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
  }
}
