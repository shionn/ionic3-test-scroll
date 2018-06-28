import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the News200Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news500',
  templateUrl: 'news500.html',
})
export class News500Page {

  public news: Array<{name:string, content:string}> = new Array<{name:string,content:string}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0;i<500;i++) {
      this.news.push({ name:"name "+i, content:"content "+i});
    }
  }

}
