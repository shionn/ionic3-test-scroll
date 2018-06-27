import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Cards500JsScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards500-js-scroll',
  templateUrl: 'cards500-js-scroll.html',
})
export class Cards500JsScrollPage {

  public cards: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
    for(let i=0;i<500;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
  }
}
