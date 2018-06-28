import {Component, Input} from '@angular/core';

/**
 * Generated class for the CatNewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cat-news',
  templateUrl: 'cat-news.html'
})
export class CatNewsComponent {

  @Input()
  public aNews: {name:string, content:string};

  constructor() {
  }

  public date():string {
    return "date";
  }

}
