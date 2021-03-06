import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Div200Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-div200',
  templateUrl: 'div200.html',
})
export class Div200Page {

  public cards: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0;i<200;i++) {
      this.cards.push({ name:"name "+i, content:"content "+i});
    }
  }
}
