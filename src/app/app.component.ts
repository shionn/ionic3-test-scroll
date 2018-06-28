import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CardsPage} from "../pages/cards/cards";
import {Cards50Page} from "../pages/cards50/cards50";
import {Cards100Page} from "../pages/cards100/cards100";
import {Cards200Page} from "../pages/cards200/cards200";
import {Cards300Page} from "../pages/cards300/cards300";
import {Div200Page} from "../pages/div200/div200";
import {Cards200JsScrollPage} from "../pages/cards200-js-scroll/cards200-js-scroll";
import {Cards500JsScrollPage} from "../pages/cards500-js-scroll/cards500-js-scroll";
import {Cards500VirtualScrollPage} from "../pages/cards500-virtual-scroll/cards500-virtual-scroll";
import {CardsInfiniScrollPage} from "../pages/cards-infini-scroll/cards-infini-scroll";
import {News200Page} from "../pages/news200/news200";
import {News500Page} from "../pages/news500/news500";
import {Cards500NavBarPage} from "../pages/cards500-nav-bar/cards500-nav-bar";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: "Cards 50", component: Cards50Page},
      { title: "Cards 100", component: Cards100Page},
      { title: "Cards 200", component: Cards200Page},
      { title: "Cards 200 JsScroll", component: Cards200JsScrollPage},
      { title: "Cards 300", component: Cards300Page},
      { title: "Cards 500", component: CardsPage},
      { title: "Cards 500 JsScroll", component: Cards500JsScrollPage},
      { title: "Cards 500 VirtualScroll", component: Cards500VirtualScrollPage},
      { title: "Cards 500 div flex", component: Cards500NavBarPage},
      { title: "Cards InfiniScroll", component: CardsInfiniScrollPage},
      { title: "Div 200", component: Div200Page},
      { title: "News 200 no select", component: News200Page},
      { title: "News 500 display none", component: News500Page},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
