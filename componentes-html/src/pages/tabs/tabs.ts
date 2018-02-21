import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BagdesPage } from '../bagdes/bagdes';
import { CardsPage } from '../cards/cards';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = BagdesPage;
  tab5Root = CardsPage;

  constructor() {

  }
}
