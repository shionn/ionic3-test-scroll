import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
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
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CardsPage,
    Cards50Page,
    Cards100Page,
    Cards200Page,
    Cards200JsScrollPage,
    Cards300Page,
    Cards500JsScrollPage,
    Cards500VirtualScrollPage,
    CardsInfiniScrollPage,
    Div200Page,
    News200Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CardsPage,
    Cards50Page,
    Cards100Page,
    Cards200Page,
    Cards200JsScrollPage,
    Cards300Page,
    Cards500JsScrollPage,
    Cards500VirtualScrollPage,
    CardsInfiniScrollPage,
    Div200Page,
    News200Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
