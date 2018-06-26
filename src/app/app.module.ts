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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CardsPage,
    Cards50Page,
    Cards100Page,
    Cards200Page,
   Cards300Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    Cards300Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
