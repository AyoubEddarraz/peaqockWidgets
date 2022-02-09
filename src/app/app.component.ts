import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  hovredItem :number | null = null;

  tradeData: tradeData[] = [
    {
      title: "Product analytics",
      desc: "The value of imported or exported or services product by time, region, country, sector, prices"
    },
    {
      title: "Economic indicators",
      desc: "We can use economic indicators correlation to predict future insights of a certain country (population, GDB, imports, Exports, Concentration index, penetration rate, inflations, ....)"
    },
    {
      title: "Trade regulations",
      desc: "We provide all the needed support to learn about the regulation of each country before engaging any importing/exporting opportunity"
    },
    {
      title: "Trade tools",
      desc: "We provide our customers with the necessary tools to estimate the freight routes, freight companies, freight quotes, tracking of shipments ..."
    }
  ]

  hovredItemFun = (i:number) => this.hovredItem = i;

  closeItem = () => this.hovredItem = null;


}

export interface tradeData {
  title: string;
  desc: string;
}
