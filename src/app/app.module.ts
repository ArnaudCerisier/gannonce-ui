import './vendor';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemsResolver } from '../pages/list/list-resolver.service';

import { HelloIonicPage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

const appRoutes: Routes = [
  {
    path: '',
    component: HelloIonicPage,
    data: { title: 'Titre 1' }
  },
  {
    path: 'mon_compte',
    component: ListPage,
    data: { title: 'Titre 2' }
  }
];

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    ItemsResolver,
    {provide: APP_BASE_HREF, useValue: '/#/'},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
