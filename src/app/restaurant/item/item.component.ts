import { Component, OnInit, Input } from "@angular/core";
import { Restaurant } from "../model/restaurant.model";

@Component({
  selector: "dr-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() {}

  ngOnInit() {}
}
