import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../service/restaurant.service";
import { Restaurant } from "../model/restaurant.model";

@Component({
  selector: "dr-restaurant-main",
  templateUrl: "./restaurant-main.component.html",
  styleUrls: ["./restaurant-main.component.css"]
})
export class RestaurantMainComponent implements OnInit {
  restaurantList:Restaurant[];
  restaurantCount:number;

  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.service.getRestaurants().subscribe(
      data => {
        this.restaurantList = data.restaurants;
        this.restaurantCount = data.count;
      }
    )
  }
}
