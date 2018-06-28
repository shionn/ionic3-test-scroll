import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Cards500NavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards500-nav-bar',
  templateUrl: 'cards500-nav-bar.html',
})
export class Cards500NavBarPage {

  public cards: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0;i<500;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
  }
}
